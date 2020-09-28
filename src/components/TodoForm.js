import React, {Component} from 'react';

class TodoForm extends Component{
    state = {
        todo: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        //Pass todo back to the app component
        this.props.handleSubmit(this.state.todo);
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        id='todo'
                        name='todo'
                        onChange={this.handleChange}
                        value={this.state.todo}
                        placeholder='Todo...'
                    />
                    <button type='submit'>
                        Add Todo
                    </button>
                    <button>
                        Clear Completed
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;