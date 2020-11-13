import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../redux/reducer'
import EntryForm from './EntryForm'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            username: "",
            password: "",
            newUser: false
        }
    }

    toggleNewUser = () => this.setState({newUser: !this.state.newUser})

    changeHandler = e => this.setState({[e.target.name]: e.target.value})

    entryFn = async e => {
        e.preventDefault()
        const {email, username, password, newUser} = this.state
        try {
            const user = await axios.post(
                `/auth/${newUser ? "register" : "login"}`, 
                newUser ? {email, username, password} : {email, password}
            )
            this.props.loginUser(user.data)
            this.props.history.push("/feed")

        } catch (err) {
            alert(err.response.request.response)
        }
    }

    render() {
        const {newUser} = this.state
        const {changeHandler, entryFn, toggleNewUser} = this

        return (
            <div>
                <EntryForm changeHandler={changeHandler} entryFn={entryFn} newUser={newUser} toggleNewUser={toggleNewUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {loginUser})(Auth)
