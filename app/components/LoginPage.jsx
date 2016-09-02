import React, { PropTypes } from 'react';
import Label from './Label.jsx';
import TextInput from './TextInput.jsx';
import Button from './Button.jsx';
import {login} from '../actions';

class LoginPage extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {username: '', password: ''};
    this.onChange = (e) => this.setState({[e.target.name]: e.target.value});
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.context.store.dispatch(login(this.state, () => {
      this.context.history.pushState({}, '/');
    }));
  }

  render() {
    const style = {
      width: '42%',
      minWidth: '350px',
      margin: 'auto',
      padding: '2em',
      fontFamily: 'gotham, avenir'
    };
 
    return (
      <form onSubmit={this.login} style={style}>
        <Label htmlFor="username" value="Username" />
        <TextInput id="username"
          name="username"
          placeholder="username"
          onChange={this.onChange}
          label="Username"
          type="email"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="password" 
          onChange={this.onChange} 
          label="Password"
          type="password"
        />
        <Button value="Login"/>
      </form>
    );
  }
}

export default LoginPage;
