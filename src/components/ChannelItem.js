import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';

class ChannelItem extends Component {

    // state = {
    //     selectedChannel: null,
    // };

    // setChannel = () => {
    //     this.setState({
    //         selectedChannel: `${this.props.channel.id}`,
    //     });
    // };

    selectChannel = () => {
        console.log(`Channel ${this.props.channel.id} has been selected.`);
        this.props.dispatch({
            type: 'SELECT_CHANNEL',
            payload: {
                selectedChannel: this.props.channel.id,
            }
        });
        // this.setState({
        //     selectedChannel: null,
        // });
    };

    render() {
        return (

            <>

            <li>
                <h2>{this.props.channel.channel_name}</h2>
                <button onClick={this.selectChannel}>Load channel</button>
            </li>

            </>

        );
    };
};

export default connect() (ChannelItem);