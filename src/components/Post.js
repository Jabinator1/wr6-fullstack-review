import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            isEditing: false,
            img: "",
            name: "",
            location: ""
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    isEditingToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    cancel = () => {
        this.isEditingToggle()
    }

    save = async () => {

    }
    render() {
        const {post: {img, location, species_name, username, user_id}, user: {userId}} = this.props
        const {isEditing} = this.state
        
        const inputsArr = [
            {type: "url", name: "img", placeholder: "URL of the bird picture"},
            {type: "text", name: "speciesName", placeholder: "Bird species name"},
            {type: "text", name: "location", placeholder: "Bird spotted location"}
        ]
        const inputsMapped = inputsArr.map(input => <input key={input.name} type={input.type} name={input.name} placeholder={input.placeholder} onChange={e => this.changeHandler(e)}/>)


        return (
            <div>
                {
                    !isEditing ? (
                        <div>
                            <div>
                                <h5>{species_name}</h5>
                                <h5>Spotted in: {location}</h5>
                            </div>
                            <img src={img} alt={species_name} style={{width: "400px"}}/>
                        </div>
                    ) : (
                        <div>
                            {inputsMapped}
                        </div>
                    )
                }
    
                <div>
                    <h5>Submitted by <Link to={`/users/${user_id}`}>{username}</Link></h5>
                    {userId === user_id ? (
                         !isEditing ? <button type="button" onClick={this.isEditingToggle}>Edit</button> : (
                            <div>
                                <button type="button" onClick={this.cancel}>Cancel</button>
                                <button type="button" onClick={this.save}>Save</button>
                            </div>
                         )
                    ) : null}
                </div>
                {/* <input type="text" name="comment" placeholder="Write a comment" /> */}
            </div>
        )
    }
}

export default Post