import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Secure Submarine',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              On the Secure Submarine, there are many secrets, but our enemies
              are out to steal our secrets! We just realized that our Secure
              Submarine web portal (the portal for all of the hottest gossip on
              the secure submarine) is compromised! Anyone, logged in or not,
              can visit <strong>`http://localhost:5000/api/secrets`</strong> to
              see all of the secrets for the entire crew!
            </p>

            <ol>
              <li>Setup the database</li>
              <li>
                Create <strong>.env</strong> file with a{' '}
                <strong>SERVER_SESSION_SECRET</strong>
              </li>
              <li>
                run: <strong>npm install</strong>
              </li>
              <li>
                run: <strong>npm run server</strong>
              </li>
              <li>
                open a new terminal and run: <strong>npm run client</strong>
              </li>
            </ol>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
