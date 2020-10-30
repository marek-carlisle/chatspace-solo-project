import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';

class ChannelPage extends Component {




render() {
    return (

        <>

            <h2>Channel Page</h2>

            <MessageBox />

        </>

    )
}











};

const mapStoreToProps = (reduxState) => ({
    chat: reduxState.chat
});

export default connect(mapStoreToProps)(ChannelPage);