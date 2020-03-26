import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './component/layout/header';
import Todo from './component/Todo'
import AddTodo from './component/AddTodo';
import About from './component/pages/About'
import uuid from 'uuid/v4';

import './App.css';

class App extends Component {
 
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Coding',
        completed: false
      },
      {
        id: uuid(),
        title: 'Algorithm',
        completed: false
      },
      {
        id:uuid(),
        title: 'Reading',
        completed: false
      },
      {
        id:uuid(),
        title: 'Singing',
        completed: false
      }
    ]
  }
  //toggle com-plete
  markComplete = (id) => {
    this.setState({todo: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // delete todo
  delTodo = (id) => {
    console.log(id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render(){
    console.log(this.state.todos)

  return (
    <Router>

    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo = {this.addTodo}/>
          <Todo todo={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      
      </div>
      
      
    </div>
    </Router>
  );
  }
}

export default App;
