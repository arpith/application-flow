import React from 'react';

class Logo extends React.Component {
  render() {
    const style = {
      width: '1em',
      margin: '0.6em',
      float: 'right'
    };
    return (
        <img style={style} src="/menubutton.png" alt="Menu Button"></img>
    );
  }
}

export default Logo;
