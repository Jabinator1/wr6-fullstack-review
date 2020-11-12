import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Login</NavLink></li>
                <li><NavLink to="/feed">Bird Feeder</NavLink></li>
                <li><NavLink to="/createpost">Post</NavLink></li>
            </ul>
        </header>
    )
}

export default Header