import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../../components/Nav';
import UserService from '../../services/UserService';
import { fetchUser } from '../../redux/actions/userActions';

class InfoPage extends Component {

    static propTypes = {
        fetchUser: PropTypes.func,
        user: PropTypes.object
    }

    componentDidMount = (props, state) => {
        this.props.fetchUser();
    }

    componentDidUpdate = () => {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            console.log('not loading or logged in');
            this.props.history.push('home');
        }
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div className="container">
                    <p>
                        Info Page
                    </p>
                </div>
            );
        }

        return (
            <div>
                <Nav />
                { content }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    fetchUser
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
