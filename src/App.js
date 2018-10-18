import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import {USER_ACTIONS} from './redux/actions/userActions'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

import './styles/main.css';

class App extends Component {
  componentDidMount () {
    props.dispatch({type: USER_ACTIONS.FETCH_USER})
  }

  render() {
    return (
    <div>
      <Header title="Project Base" />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          <ProtectedRoute
            path="/user"
            component={UserPage}
          />
          <ProtectedRoute
            path="/info"
            component={InfoPage}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />

        </Switch>
      </Router>
    </div>
  )}
}

export default connect()(App);
