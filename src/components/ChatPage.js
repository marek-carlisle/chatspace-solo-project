import React, { Component } from 'react';
import ChannelPage from './ChannelPage';
import InputBox from './InputBox';

class ChatPage extends Component {

    render() {
        console.log(this.props);
        return (
            <>

            <InputBox />

            <br />

            <ChannelPage />

            </>
        );
    };
};

export default ChatPage;