import React, { Component } from 'react';
import ChannelPage from './ChannelPage';
import InputBox from './InputBox';
import MessageBox from './MessageBox';

class ChatPage extends Component {

    render() {
        console.log(this.props);
        return (
            <>

            <InputBox />

            <br />

            <ChannelPage />

            <MessageBox />

            </>
        );
    };
};

export default ChatPage;