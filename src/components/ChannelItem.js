import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';

class ChannelItem extends Component {

    state = {
        selectedChannel: null,
    };

    setChannel = () => {
        this.setState({
            selectedChannel: `${this.props.channel.id}`,
        });
        console.log(this.state.selectedChannel);
    };

    render() {
        return (

            <>

            <li>
                <h2>{this.props.channel.channel_name}</h2>
                <button onClick={this.setChannel}>Load channel</button>
            </li>

            </>

        );
    };
};

export default ChannelItem;