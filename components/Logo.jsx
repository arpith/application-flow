import React from 'react';

class Logo extends React.Component {
  render() {
    const style = {
      width: '12em'
    };
    return (
        <img style={style} src="http://i.imgur.com/n5JPdKP.png" alt="Bond Street Logo"></img>
    );
  }
}

export default Logo;
