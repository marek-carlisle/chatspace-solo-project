import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';


//A Custom Wrapper Component -- This will keep our code DRY.
//Responsible for watching redux state, and returning an appropriate component
//API for this component is the same as a regular route
class ProtectedRoute extends Component {

  render() {
      let ComponentToProtect = this.props.component
      let ProtectedComponent;
      if(this.props.loginPending || this.props.user.isLoading ) {
        ProtectedComponent = <p>LOADING...</p>
      } else if (!this.props.user.isLoading && !this.props.user.id) {
        ProtectedComponent = <Redirect to="/home"></Redirect>
      } else {
        ProtectedComponent = <ComponentToProtect />
      }

      return (
          <Route
            path={this.props.path}
            render={() => {
              return ProtectedComponent
              }
            }
          />
      )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginPending: state.login.isLoading
  }
}

export default connect(mapStateToProps)(ProtectedRoute)


