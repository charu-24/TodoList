import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header style={style}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
            
        
    )
}
const style = {
    
    color: 'black',
    textAlign: 'center',
    fontSize: '1.5em',
    padding: '2px',
    fontStyle: 'bold',
    height: '20%'
}
const linkStyle = {
    color: 'grey',
    textDecoration: 'none',
    textAlign : 'center',
    fontSize: '0.5em'
}
export default Header;