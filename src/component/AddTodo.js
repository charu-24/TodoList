import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''

    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input type="text" name="title" placeholder="Add Todo.."
                value={this.state.title}
                onChange={this.onChange}
                style = {{ flex: '10', padding: '5px', background: '#C2C2C2', boxShadow: '2px 2px 5px black' }}
                />
                <input type="submit" value="+"
                className="btn"
                style={{flex:'1', background: 'grey', boxShadow: '2px 2px 5px black'}}
                />
                  
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    marginLeft: '10%',
    width: '80%',
    background: '#C2C2C2',
    marginBottom: '3%'
}
export default AddTodo