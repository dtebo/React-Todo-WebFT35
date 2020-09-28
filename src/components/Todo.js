import React from 'react';

import './Todo.css';

const Todo = (props) => {
    return(
        <div className='todo-container'>
            <div
                className={`todo${props.todo.completed ? ' completed' : ''}`}
                onClick={() => props.toggleCompleted(props.todo.id)}
            >
                <p>{props.todo.title}</p>
            </div>
        </div>
    )
};

export default Todo;