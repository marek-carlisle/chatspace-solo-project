import React, { Component } from 'react';

class MessageItem extends Component {

    state = {
        null: null,
    };

    render() {
        console.log(this.props);
        return (
            <>

                <li>
                    <h5>{this.props.message.username}</h5>
                    <p>{this.props.message.message}</p>
                </li>



            </>
        );
    };
};

export default MessageItem;