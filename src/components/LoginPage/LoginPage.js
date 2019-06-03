import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {


  const dispatch = useDispatch();
  const errors = useSelector((redux) => redux.errors)
  const [user, setUser] = useState({ username: '', password: '' })
  // state = {
  //   username: '',
  //   password: '',
  // };

  const login = (event) => {
    event.preventDefault();
    const { username, password } = user;

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username,
          password
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  const handleInputChangeFor = propertyName => (event) => {
    console.log(propertyName)
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  }

  return (
    <div>
      {errors.loginMessage && (
        <h2
          className="alert"
          role="alert"
        >
          {errors.loginMessage}
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
              value={user.username}
              onChange={handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
              <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChangeFor('password')}
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
          onClick={() => { dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
        >
          Register
          </button>
      </center>
    </div>
  );
}

export default LoginPage;
