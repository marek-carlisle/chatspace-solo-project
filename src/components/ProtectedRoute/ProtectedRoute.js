import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route
// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

const ProtectedRoute = (props) => {
  // takes ComponentToProtect from component prop
  // grabs all other props and passes them along to route
  const {
    component: ComponentToProtect,
    user,
    loginMode,
    ...otherProps
  } = props;

  // We return a Route component that gets added to our list of routes
  return (
      <Route
        // all props like 'exact' and 'path' that were passed in
        // are now passed along to the 'Route' Component
        {...otherProps}
        render={() => (
          // if the user is logged in (only logged in users have ids)
          user.id ?
          // show the component that is protected
          <ComponentToProtect /> :
          // if they are not logged in, check the loginMode on Redux State
          // if the mode is 'login'
          loginMode === 'login' ?
          // show the LoginPage
          <LoginPage /> :
          // the the user is not logged in and the mode is not 'login'
          // show the RegisterPage
          <RegisterPage />
        )}
      />
  )
}

// Instead of taking everything from state, we just want the user and loginMode
// to determine which page we should show the user
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });
const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginMode: state.loginMode,
  }
}

export default connect(mapStateToProps)(ProtectedRoute)


