import React, { useState } from 'react';
import { connect } from 'react-redux';

const LoginPage = ({loginMessage, dispatch}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username,
          password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  return (
    <div>
      {loginMessage && (
        <h2
          className="alert"
          role="alert"
        >
          {loginMessage}
        </h2>
      )}
      <form onSubmit={login}>
        <h1>Login</h1>
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
            className="log-in"
            type="submit"
            name="submit"
            value="Log In"
          />
        </div>
      </form>
      <center>
        <button
          type="button"
          className="link-button"
          onClick={() => {dispatch({type: 'SET_TO_REGISTER_MODE'})}}
        >
          Register
        </button>
      </center>
    </div>
  );
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  loginMessage: state.errors.loginMessage,
});

export default connect(mapStateToProps)(LoginPage);
