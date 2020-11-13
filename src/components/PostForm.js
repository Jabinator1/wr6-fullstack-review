import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            img: "",
            speciesName: "",
            location: "",
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    uploadPost = async e => {
        e.preventDefault()
        const {userId} = this.props.user
        
        try {
            await axios.post("/api/posts", {...this.state, userId})
            this.props.history.push("/feed")
        } catch (err) {
            console.log(err.response.request.response)
        }

    }

    render() {
        const inputsArr = [
            {type: "url", name: "img", placeholder: "URL of the bird picture"},
            {type: "text", name: "speciesName", placeholder: "Bird species name"},
            {type: "text", name: "location", placeholder: "Bird spotted location"},
        ]
        const inputsMapped = inputsArr.map(input => <input key={input.name} type={input.type} name={input.name} placeholder={input.placeholder} onChange={e => this.changeHandler(e)}/>)
        return (
            <div>
                <form onSubmit={e => this.uploadPost(e)}>
                    {inputsMapped}
                    <div>
                        <button type="reset">Cancel</button>
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Form)
