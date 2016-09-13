import React, { PropTypes } from 'react';
import Label from './Label.jsx';
import TextInput from './TextInput.jsx';
import Button from './Button.jsx';

class AuthForm extends React.Component {
  static contextTypes = {
    store: PropTypes.any,
    router: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {username: '', password: ''};
    this.onChange = (e) => this.setState({[e.target.name]: e.target.value});
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {store, router} = this.context;
    store.dispatch(this.props.action(this.state, () => {
      router.push({}, '/');
    }));
  }

  render() {
    const style = {
      fontFamily: 'gotham, avenir',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    };
 
    return (
      <form onSubmit={this.onSubmit} style={style}>
        <Label htmlFor="username" value="Username" />
        <TextInput id="username"
          name="username"
          placeholder="username"
          onChange={this.onChange}
          label="Username"
        />
        <Label htmlFor="password" value="Password" />
        <TextInput id="password" 
          name="password" 
          placeholder="password" 
          onChange={this.onChange} 
          label="Password"
          type="password"
        />
        <Button value={this.props.submitButtonValue} />
      </form>
    );
  }
}

export default AuthForm;
