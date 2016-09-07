import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AuthForm from '../AuthForm.jsx';
import {signup} from '../../actions';

class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <h2>Please sign up to continue</h2>
        <AuthForm action={signup} submitButtonValue="Sign up" />
        <p style={{float: 'left'}}>Already signed up? <Link to="/login">Click here to login</Link></p>
      </div>
    );
  }
}

export default SignupPage;
