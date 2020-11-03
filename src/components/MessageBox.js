import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

class MessageBox extends Component {

    state = {
        null: null,
    };

    componentDidMount() {
        this.getMessages();
        // this.reloadTimer();
    };

    reloadTimer = () => {
        setInterval(this.getMessages, 3 * 1000);
    };

    getMessages = () => {
        this.props.dispatch({
            type: 'FETCH_MESSAGES',
        });
    };

    render() {
        console.log('This is your chat data! ', this.props);
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

export default connect(mapStoreToProps)(MessageBox);