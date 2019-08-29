import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  };

  // testFunc(id) {
  //   console.log('Hello TodoItem ' + id);
  // }
  render() {
    //console.log('from TodoItem: ',this.state, this.props);
    const {id, title, completed} = this.props.todo;
    const attributes = {};
    //работает, но ругается. Просит прочитать это: https://reactjs.org/docs/forms.html#controlled-components
    if (completed)
      attributes['checked'] = 'checked';

    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' {...attributes} onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired, //it is a single object
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};


const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem
