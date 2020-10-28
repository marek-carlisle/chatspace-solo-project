import React, { Component } from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';

class ChatPage extends Component {

    render() {
        console.log(this.props);
        return (
            <>

            <InputBox />

            <br />

            <MessageBox />

            </>
        );
    };
};

export default ChatPage;