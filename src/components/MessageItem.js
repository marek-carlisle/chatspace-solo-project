import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageItem extends Component {

    state = {
        editMessage: false,
        editMessageText: '',
    };

    setEdit = () => {
        this.setState({
            editMessage: true,
        });
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
            editMessage: false,
            editMessageText: '',
        });
    };

    handleDelete = () => {
        console.log(`Deleting message with ID ${this.props.message.message_id} by user with ID ${this.props.message.id}`);
        this.props.dispatch({ type: 'DELETE_MESSAGE', payload: this.props.message.message_id, });
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

                <li>
                    <h5>{this.props.message.username}</h5>
                    <p>{this.props.message.message}</p>

                    <button onClick={this.setEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>

                    {this.state.editMessage && <>
                        <br />
                        <input name='editMessageText' placeholder='Edit message' value={this.state.editMessageText} onChange={this.handleChange} />
                        <button onClick={this.handleEdit}>Save</button>
                    </>}
                </li>



            </>
        );
    };
};

export default connect()(MessageItem);