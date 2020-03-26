import React, { Component } from 'react'
import '../App.css'
import Proptype from 'prop-types'
export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor : 'grey',
            padding: '10px',
            color: 'white',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            width: '80%',
            marginLeft: '10%',
            boxShadow: '2px 2px 10px black',
            borderRadius: '5%',
            marginTop: '2%'
        }
    }
    
    render() {
        const { id,title } = this.props.todo
        return (
            <div className='divItem' style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/>{' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}

Todoitem.protoType = {
    todo: Proptype.object.isRequired
}

// const itemStyle= {
//     backgroundColor: 'black',
//     color: 'white'
// }
const btnStyle = {
    background: 'white',
    color: 'black',
    padding: '5px 5px',
    borderRadius: '20%',
    cursor: 'pointer',
    float: 'right',
    border: ' none',
    boxShadow: '2px 2px 10px black'
}
export default Todoitem
