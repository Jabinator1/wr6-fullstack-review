import axios from 'axios'

const initialState = {
    user: {},
    isLoggedIn: false
}

const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const GET_USER = "GET_USER"


export const loginUser = user => ({
    type: LOGIN_USER,
    payload: user
})

export const logoutUser = () => ({
    type: LOGOUT_USER, 
    payload: initialState
})

export const getUser = () => {
    const user = axios.get("/api/user").then(res => res.data)
    return {
        type: GET_USER,
        payload: user
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: 
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER: 
            return action.payload

        case `${GET_USER}_PENDING`:
            return state
        case `${GET_USER}_FULFILLED`:
            return {...state, user: action.payload, isLoggedIn: true}
        case `${GET_USER}_REJECTED`:
            return initialState

        default: 
            return state
    }
}