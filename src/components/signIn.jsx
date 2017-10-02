import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from "../firebase";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        })
    };

    signIn = (event) => {
        event.preventDefault();
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.setState({
                    error
                })
            })
    };

    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className='form-group'>
                    <input type="text"
                           className='form-control'
                           placeholder='email'
                           onChange={event => this.handleAnyInputChange(event, 'email')}
                    />
                    <input type="password"
                           className='form-control'
                           placeholder='password'
                           onChange={event => this.handleAnyInputChange(event, 'password')}
                    />
                    <button className='btn btn-primary'
                            type='button'
                            onClick={this.signIn}
                    >Sign in</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        );
    }
}

export default SignIn;