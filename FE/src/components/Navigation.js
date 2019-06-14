import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Navigation(props) {
    console.log(props.loggedIn)
    const logOut = e => {
        localStorage.removeItem('token')
        props.history.push('/')
    }
    return(
        <div style={{position: "fixed", top: "0", width: "100vw", height: "10vh", borderBottom: "2px solid lightgrey", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            {props.loggedIn && <button onClick={logOut}>Log Out</button>}
        </div>
    )
}

export default withRouter(Navigation)