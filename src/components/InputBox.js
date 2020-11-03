import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <>

                <h1>Chat Page</h1>

                <br />

                <input type='text' placeholder='Send message' name='message' onKeyPress={this.handleEnter} value={this.state.message} onChange={this.handleChange} />

                <br />

                <button onClick={this.handleSubmit}>Send</button>

            </>
        );
    };
};

const mapStoreToProps = (reduxState) => ({
    chat: reduxState.chat
});

export default connect(mapStoreToProps)(InputBox);