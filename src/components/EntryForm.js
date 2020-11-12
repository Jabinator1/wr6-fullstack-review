import React from 'react'

const EntryForm = ({changeHandler, entryFn, newUser, toggleNewUser}) => {

    const inputArr = [
        {name: "email", type: "email"},
        {name: "password", type: "password"}
    ]

    if (newUser) {
        inputArr.splice(1, 0, {name: "username", type: "text"})
    }

    const inputsMapped = inputArr.map(input => <input type={input.type} name={input.name} placeholder={input.name} onChange={e => changeHandler(e)} />)

    return (
        <div>
            <form onSubmit={e => entryFn(e)}>
                {inputsMapped}
                <button type="submit">{newUser ? "Create Account" : "Login"}</button>
            </form>
            <button onClick={toggleNewUser}>{newUser ? "Already have an account?" : "Create an account"}</button>
        </div>

    )
}

export default EntryForm