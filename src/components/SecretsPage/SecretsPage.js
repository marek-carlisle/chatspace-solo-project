import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class SecretsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SECRETS' });
  }

  render() {
    return (
      <div className="container">
        <p>
          Currently logged in as <b>{this.props.store.user.username}</b>
        </p>
        <p>
          Clearance level: <b>{this.props.store.user.clearance_level}</b>
        </p>
        <ul>
          {this.props.store.secrets.map((secret) => (
            <li>
              Clearance: {secret.secrecy_level} | Content: {secret.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SecretsPage);
