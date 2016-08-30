import React from 'react';
import Logo from './Logo.jsx';

class Step extends React.Component {
  render() {
    const divStyle = {
      maxWidth: '10em',
      margin: 'auto',
      fontFamily: 'gotham, avenir'
    };
    const h1Style = {
      fontWeight: '500',
      size: '1.4em'
    };
    return (
      <div style={divStyle}>
        <h1 style={h1Style}>
          Step {this.props.number}
        </h1>
      </div>
    );
  }
}

export default Step;
