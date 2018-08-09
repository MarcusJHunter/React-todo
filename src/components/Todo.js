import React, {Component} from 'react'
import CreateTodoForm from './CreateTodoForm';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor() {
    super();
    this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
    this.editClickedTodo = this.editClickedTodo.bind(this);
  }
  deleteClickedTodo() {
    this.props.onDeleteTodo(this.props.todo);
  }
  editClickedTodo(){
    this.props.onEditTodo(this.props.todo)
  }
  render() {
    return (
      <span data-todos-index={this.props.todo.id}>
        <span onClick={ this.editClickedTodo}>
        {this.props.todo.body}
        </span>
        {this.props.editingTodoId === this.props.todo._id ?
         <TodoForm
         autoFocus={true}
         buttonName="Update Todo!"
         onUpdateTodo={this.props.onUpdateTodo}
         /> : ''}
        <span
          className='deleteButton'
          onClick={this.deleteClickedTodo}>
          (X)
        </span>
        </span>

    )
  }
}



export default Todo
