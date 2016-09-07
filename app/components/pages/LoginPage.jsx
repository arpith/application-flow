import React, { PropTypes } from 'react';
import AuthForm from '../AuthForm.jsx';
import {login} from '../../actions';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Back!</h1>
        <h2>Please login to continue</h2>
        <AuthForm action={login} submitButtonValue="Login" />
      </div>
    );
  }
}

export default LoginPage;
