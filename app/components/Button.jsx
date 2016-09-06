import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
      float: 'left',
      clear: 'both',
    };
    return (
      <input type="submit" value={this.props.value} style={style}></input>
    );
  }
}

export default Button;
