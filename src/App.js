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

  togglePurchased = (id) => {

  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
