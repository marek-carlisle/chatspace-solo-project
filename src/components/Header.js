import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        return (
            <div className="instructions">
                <div className="container">
                    <h1 className="lead">{ this.props.title }</h1>
                </div>
            </div>
        );
    }
}
