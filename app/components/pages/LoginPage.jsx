import React, { PropTypes } from 'react';
import AuthForm from '../AuthForm.jsx';
import {login} from '../../actions';

class LoginPage extends React.Component {
  render() {
    const style = {
      width: '42%',
      minWidth: '350px',
      margin: 'auto',
      padding: '2em',
      fontFamily: 'gotham, avenir'
    };
    return (
      <div style={style}>
        <h1>Welcome Back!</h1>
        <h2>Please login to continue</h2>
        <AuthForm action={login} submitButtonValue="Login" />
      </div>
    );
  }
}

export default LoginPage;
