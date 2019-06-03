import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterPage = () => {
  const errors = useSelector((state) => state.errors)
  const [user, setUser] = useState({ username: '', password: '' })
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();
    const { username, password } = user;
    if (username && password) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username,
          password,
        },
      });
    } else {
      dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  const handleInputChangeFor = propertyName => (event) => {
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  }
  return (
    <div>
      {errors.registrationMessage && (
        <h2
          className="alert"
          role="alert"
        >
          {errors.registrationMessage}
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
          onClick={() => { dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
        >
          Login
          </button>
      </center>
    </div>
  );
}

export default RegisterPage;

