import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';


//A Custom Wrapper Component -- This will keep our code DRY.
//Responsible for watching redux state, and returning an appropriate component
//API for this component is the same as a regular route
class ProtectedRoute extends Component {
  render() {
    const ComponentToProtect = this.props.component;

    return (
        <Route
          path={this.props.path}
          render={() => (
            this.props.user.id ?
            <ComponentToProtect /> : 
            <LoginPage />
          )}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ProtectedRoute)


