import React, {Component} from 'react';
import { connect } from 'react-redux';

class SecretsPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_SECRETS'});
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.secrets.map(secret => (
            <li>
              Clearance: {secret.secrecy_level} | Content: {secret.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  secrets: state.secrets,
});

export default connect(mapStateToProps)(SecretsPage);
