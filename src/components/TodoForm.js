import React, {Component} from 'react';

class TodoForm extends Component{
    state = {
        todo: ''
    };

    render(){
        return(
            <>
                <form>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.todo}
                        placeholder='Todo...'
                    />
                </form>
            </>
        );
    }
}

export default TodoForm;