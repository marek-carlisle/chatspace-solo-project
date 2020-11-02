import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import ChannelItem from './ChannelItem';

class ChannelPage extends Component {

    componentDidMount() {
        this.getChannels();
    };

    getChannels = () => {
        this.props.dispatch({
            type: 'FETCH_CHANNELS'
        });
    };

    render() {
        console.log('This is your channel data!', this.props);
        return (

            <>

                <h2>Channel Page</h2>

                <ul>
                    {this.props.channels !== undefined && this.props.channels.map((channel) => {
                        return (
                            <ChannelItem channel={channel} />
                        )
                    })}
                </ul>

                <MessageBox />

            </>

        );
    };
};

const mapStoreToProps = (reduxState) => ({
    channels: reduxState.channels
});

export default connect(mapStoreToProps)(ChannelPage);