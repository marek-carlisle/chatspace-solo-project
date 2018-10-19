import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';


//A Custom Wrapper Component -- This will keep our code DRY.
//Responsible for watching redux state, and returning an appropriate component
//API for this component is the same as a regular route
const ProtectedRoute = (props) => {
    // makes ComponentToProtect from component prop
    // grabs all other props and passes them along to route
  const {
    component: ComponentToProtect,
    user,
    loginMode,
    ...otherProps
  } = props;

  return (
      <Route
        {...otherProps}
        render={() => (
          user.id ?
          <ComponentToProtect /> :
          loginMode === 'login' ?
          <LoginPage /> :
          <RegisterPage />
        )}
      />
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginMode: state.loginMode,
  }
}

export default connect(mapStateToProps)(ProtectedRoute)


