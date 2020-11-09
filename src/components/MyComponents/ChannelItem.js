import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

class ChannelItem extends Component {

    getMessages = () => {
        this.props.dispatch({
            type: 'FETCH_MESSAGES',
        });
    };

    selectChannel = () => {
        console.log(`Channel ${this.props.channel.id} has been selected.`);
        this.props.dispatch({
            type: 'SELECT_CHANNEL',
            payload: this.props.channel.id,
        });
        this.getMessages();
    };

    render() {
        return (

            <>

                <li class='ChannelItem'>
                    <h3>{this.props.channel.channel_name}</h3>
                    <hr />
                    <Button onClick={this.selectChannel}>Load channel</Button>
                </li>

            </>

        );
    };
};

export default connect()(ChannelItem);