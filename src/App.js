import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
//import uuid from 'uuid';


class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Dinner with wife',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Meeting with boss',
      //   completed: false
      // }
    ]
  };
  //Using lifeCycleMethod
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') //it gives us a promise we can add a limit
      .then(res => this.setState({todos: res.data}))
  }


//Toggle complete
  markComplete = (id) => {//instead of this.markComplete.bind(this)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //toggle
        }
        return todo;
      })
    })
  };

  // markComplete(id) {
  //   console.log(id);
  // }
//Delete Todo

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //этот запрос возвращает promise
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}) //передаем новый массив состояний
  };
  //чтобы сменть состояние - нужно сделать его копию
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   //title: title,
    //   title, //ES6 можно так когда ключ и значение одно слово
    //   completed: false
    // };
    //this.setState({todos: [...this.state.todos, newTodo]})
    //отправляем данные на сервер
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false,
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));

  };


  render() {
    //вся эта лесенка с Route используется для того чтобы открыть app по запросу /
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => ( //exact - чтобы не показывать первую страницу
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                {/*insert our component and passing state as a prop*/}
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                       delTodo={this.delTodo}/>
              </React.Fragment>
                )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );

  }


}

export default App;
