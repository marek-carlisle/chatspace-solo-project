import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

class MessageItem extends Component {

    state = {
        otherOptions: false,
        editMessage: false,
        editMessageText: '',
    };

    toggleOtherOptions = () => {
        if (this.state.otherOptions === false) { this.setState({ otherOptions: true }) }
        else { this.setState({ otherOptions: false }) }
    };

    toggleEdit = () => {
        if (this.state.editMessage === false) { this.setState({ editMessage: true, editMessageText: this.props.message.message }) }
        else { this.setState({ editMessage: false }) }
    };

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.handleEdit(event);
        };
    };

    handleEdit = () => {
        console.log(`Editing message with ID ${this.props.message.message_id} by user with ID ${this.props.message.id}`);
        this.props.dispatch({
            type: 'EDIT_MESSAGE',
            payload: {
                id: this.props.message.message_id,
                message: this.state.editMessageText,
            }
        });
        this.setState({
            otherOptions: false,
            editMessage: false,
            editMessageText: '',
        });
    };

    handleDelete = () => {
        console.log(`Deleting message with ID ${this.props.message.message_id} by user with ID ${this.props.message.id}`);
        this.props.dispatch({ type: 'DELETE_MESSAGE', payload: this.props.message.message_id, });
        this.setState({ otherOptions: false })
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        console.log(this.props);
        return (
            <>

                <li class='MessageItem'>
                    <h4>{this.props.message.username}</h4>
                    <hr />
                    <p>{this.props.message.message}</p>
                    <Button onClick={this.toggleOtherOptions}>...</Button> {' '}

                    {this.state.otherOptions &&
                        <>

                            <Button onClick={this.toggleEdit}>Edit</Button> {' '}
                            <Button onClick={this.handleDelete}>Delete</Button>

                            {this.state.editMessage &&
                                <>
                                    <br />
                                    <input name='editMessageText' placeholder='Edit message' value={this.state.editMessageText} onChange={this.handleChange} onKeyPress={this.handleEnter} />
                                    <Button onClick={this.handleEdit}>Save</Button>
                                </>}

                        </>}
                </li>

            </>
        );
    };
};

export default connect()(MessageItem);