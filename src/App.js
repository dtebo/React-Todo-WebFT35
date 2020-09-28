import React from 'react';
import TodoList from './components/TodoList';

import { todos } from './data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos
  };

  toggleCompleted = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    });
  }

  handleSubmit = (todo) => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, { id: Date.now(), title: todo, completed: false}]
    })
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList 
          handleSubmit={this.handleSubmit}
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
