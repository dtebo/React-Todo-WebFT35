import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';
import TodoForm from './TodoForm';

import './Todo.css';

const TodoList = (props) => {
    const {todos} = props;

    return(
        <div className='todo-list'>
            {todos && todos.map(todo => {
                return <Todo
                            key={todo.id}
                            todo={todo}
                            toggleCompleted={props.toggleCompleted}
                        />
            })}
            <TodoForm handleSubmit={props.handleSubmit} />
        </div>
    );
};

export default TodoList;