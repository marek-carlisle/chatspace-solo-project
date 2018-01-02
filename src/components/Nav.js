import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/user">
                                User Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/info">
                                Info Page
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
