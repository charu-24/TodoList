import React, { Component } from 'react'
import Todoitem from './Todoitem'
import Proptype from 'prop-types'
class Todo extends Component {
  
  render()
  {
  return this.props.todo.map((todo) => (
    <Todoitem key={todo.id} todo={todo} markComplete = {this.props.markComplete}delTodo= {this.props.delTodo}/>
    ));
}
}
Todo.protoType= {
  todo: Proptype.array.isRequired
}
export default Todo;
