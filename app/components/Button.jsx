import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <input type="submit" value={this.props.value}></input>
    );
  }
}

export default Button;
