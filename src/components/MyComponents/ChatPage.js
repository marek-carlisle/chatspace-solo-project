import React, { Component } from 'react';
import ChannelPage from './ChannelPage';
import InputBox from './InputBox';
import MessageBox from './MessageBox';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

import './MyComponents.css';

class ChatPage extends Component {

    getMessages = () => {
        this.props.dispatch({
            type: 'FETCH_MESSAGES',
        });
    };

    render() {
        return (

            <>

                {/* <Button onClick={this.getMessages}>Manual Message Reload</Button>

                <br /> <br /> */}

                {/* <img src='/images/space.jpg' alt='A picture of space' /> */}

                <div class="chat-system">
                    <ChannelPage />

                    <div id='ChatBox'>
                        <MessageBox />
                        <InputBox />
                    </div>
                </div>



            </>
        );
    };
};

export default connect()(ChatPage);