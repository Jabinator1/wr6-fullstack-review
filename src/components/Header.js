import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory, Link } from 'react-router-dom'
import { logoutUser, getUser } from '../redux/reducer'

const Header = ({user: {username, userId}, isLoggedIn, logoutUser, getUser}) => {

    useEffect(() => getUser, [getUser])

    const history = useHistory()
    const [dropdownToggle, setDropdownToggle] = useState(false)

    const logout = () => {
        axios.post("/auth/logout")
        logoutUser()
        toggleDropdown()
        history.push("/")
    }
    const toggleDropdown = () => setDropdownToggle(!dropdownToggle)

    return (
        <header>
            {!isLoggedIn ? <NavLink to="/">Login</NavLink> : (
                <div>
                    <NavLink to="/feed">Bird Feeder</NavLink>
                    <NavLink to="/createpost">Post</NavLink>
                    <button type="button" onClick={toggleDropdown}>{username}</button>
                    {dropdownToggle ? (
                        <div>
                            <Link to={`/users/${userId}`}>Profile</Link>
                            <button type="button" onClick={logout}>Logout</button>
                        </div>
                    ) : null}
                </div>
            )}
        </header>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {logoutUser, getUser})(Header)