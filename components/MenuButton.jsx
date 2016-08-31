import React from 'react';

class Logo extends React.Component {
  render() {
    const style = {
      width: '1em',
      padding: '0.6em',
      float: 'right',
      cursor: 'pointer'
    };
    return (
      <img style={style}
        src="/menubutton.png"
        alt="Menu Button"
        onClick={this.props.onClick}>
      </img>
    );
  }
}

export default Logo;
