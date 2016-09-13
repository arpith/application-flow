import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
      fontSize: '1em',
      margin: '0.2em',
      marginTop: '0.6em'
    };
    return (
      <input type="submit"
        value={this.props.value}
        style={style}
        disabled={this.props.disabled}>
      </input>
    );
  }
}

export default Button;
