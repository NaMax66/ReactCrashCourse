import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // console.log(this.props.todos) - we can get access to it. It comes from App.js;
    //ставим круглую скобку!
    //console.log('from Todos: ', this.state, this.props);

    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
      delTodo={this.props.delTodo}/> //it creates list
    ));
  }
}
//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
