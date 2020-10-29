import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

class MessageBox extends Component {

state = {
    null: null,
};

componentDidMount() {
    this.getMessages();
};

getMessages = () => {
    console.log('Getting messages from prime_app database');
    this.props.dispatch({
        type: 'FETCH_MESSAGES'
    });
};

render() {
    console.log(this.state);
    return (
        <>

        <ul>
          {this.props.chat !== undefined && this.props.chat.map((message) => {
            return (
              <MessageItem message={message} />
            )
          })}
        </ul>

        </>
    );
};



};

const mapStoreToProps = (reduxState) => ({
    chat: reduxState.chat
});

export default connect(mapStoreToProps) (MessageBox);