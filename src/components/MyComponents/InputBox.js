import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

class InputBox extends Component {

    state = {
        message: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        };
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'POST_MESSAGE', payload: this.state });
        this.setState({ message: '' });
    };

    render() {
        console.log(this.props);
        return (
            

                <div id='InputBox'>

                    <input type='text' placeholder='Send message' name='message' onKeyPress={this.handleEnter} value={this.state.message} onChange={this.handleChange} />
                    {' '}
                    <Button onClick={this.handleSubmit}>Send</Button>

                </div>

            
        );
    };
};

const mapStoreToProps = (reduxState) => ({
    chat: reduxState.chat
});

export default connect(mapStoreToProps)(InputBox);