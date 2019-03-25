import React, { useState } from 'react';
import {connect} from 'react-redux';

const RegisterPage = ({dispatch, registrationMessage}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username,
          password,
        },
      });
    } else {
      dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  return (
    <div>
      {registrationMessage && (
        <h2
          className="alert"
          role="alert"
        >
          {registrationMessage}
        </h2>
      )}
      <form onSubmit={registerUser}>
        <h1>Register User</h1>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input
            className="register"
            type="submit"
            name="submit"
            value="Register"
          />
        </div>
      </form>
      <center>
        <button
          type="button"
          className="link-button"
          onClick={() => {dispatch({type: 'SET_TO_LOGIN_MODE'})}}
        >
          Login
        </button>
      </center>
    </div>
  );
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

