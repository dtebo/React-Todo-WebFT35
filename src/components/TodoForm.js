import React, {Component} from 'react';

class TodoForm extends Component{
    state = {
        todo: ''
    };

    render(){
        return(
            <div className='form-container'>
                <form>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.todo}
                        placeholder='Todo...'
                    />
                    <button
                        type='submit'
                    >
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