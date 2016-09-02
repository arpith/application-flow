import React from 'react';
import Label from './Label.jsx';
import TextInput from './TextInput.jsx';
import SubmitButton from './SubmitButton.jsx';

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
        <SubmitButton />
      </form>
    );
  }
}

export default LoginPage;
