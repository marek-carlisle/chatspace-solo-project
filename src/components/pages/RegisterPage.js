import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    registerUser = (event) => {
        event.preventDefault();

        if(this.state.username === '' || this.state.password === '') {
            this.setState({
            	message: 'Choose a username and password!'
            });
        } else {
            console.log('sending to server...', this.state);

            const request = new Request('http://localhost:5000/api/register', {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            // making the request to the server to post the country
            fetch(request)
                .then((response) => {
                    if(response.status === 201) {
                        console.log('success: ', response);
                        this.props.history.push('/home');
                    } else {
                        console.log('failure error: ', response);
                        this.setState({
                        	message: 'Please try again.'
                        });
                    }
              	})
              	.catch((error) => {
                  	console.log('failure error: ', error);
                  	this.setState({
                  		message: 'Please try again.'
                  	});
              	});
      	}
    }

    handleInputChange = (event) => {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
  	}

    _renderAlert = () => {
        if (this.state.message !== '') {
            return (
                <h2 className="lead alert alert-danger"
                    role="alert">
                    { this.state.message }
                </h2>
            );
        }
    }

    render() {
        return (
            <div className="container">
                 <h1 className="lead">Register User</h1>
                { this._renderAlert() }
                <form onSubmit={ this.registerUser }>
                    <div>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input type="text"
                        	   name="username"
                               value={ this.state.username }
                               onChange={ this.handleInputChange } />
                     </div>
                      <div>
                        <label htmlFor="password">
                            Password:
                        </label>
                          <input type="password"
                          		 name="password"
                                 value={ this.state.password }
                                 onChange={ this.handleInputChange } />
                      </div>
                      <div>
                        <input className="btn btn-default"
                               type="submit"
                               name="submit"
                               value="Register" />
                        <Link to="/home">Cancel</Link>
                      </div>
                </form>
            </div>
        );
    }
}



