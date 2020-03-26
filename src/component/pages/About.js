import React from 'react'

export default function  About() {
    return (
    <React.Fragment style={headerStyle}>
        <h1 style={headerStyle}>About</h1>
        <p style={headerStyle}>This is the todo list app in react js</p>
        <p style={headerStyle}>It's the best way to schedule your whole day and make it productive...</p>
        
        <p style={headerStyle}>Give it a try. It will surely help You..</p>
        <p style={headerStyle}></p>
        <p style={headerStyle}></p>
    </React.Fragment>
    )
}
const headerStyle = {
    textAlign: 'center',
    padding: '10px'
}