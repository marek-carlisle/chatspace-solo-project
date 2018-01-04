import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import UserPage from './components/pages/UserPage';
import InfoPage from './components/pages/InfoPage';

import './styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header title="Passport Authentication" />
                <Router>
                    <Switch>
                        <Redirect exact
                                  from='/'
                                  to='/home'/>
                        <Route path="/home" 
                               component={ LoginPage } />
                        <Route path="/register"
                               component={ RegisterPage } />
                        <Route path="/user"
                               component={ UserPage } />
                        <Route path="/info"
                               component={ InfoPage } />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
