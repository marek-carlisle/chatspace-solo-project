import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TemplateClass extends Component {
    state = {
        heading: 'Class Component',
    };

    render() {
        return (
            <div>
                <h3>{this.state.heading}</h3>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
