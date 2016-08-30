import React from 'react';
import Logo from './Logo.jsx';

class Step extends React.Component {
  render() {
   const style = {
      fontSize: '1.8em',
      fontWeight: '500',
      paddingBottom: '1em'
    };
    return (
      <div style={style}>
       Step {this.props.number}
      </div>
    );
  }
}

export default Step;
