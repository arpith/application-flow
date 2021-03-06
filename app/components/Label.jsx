import React from 'react';

class TextInput extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontWeight: '400',
      padding: '0.2em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      flex: '1 1 auto'
    };
    return <label htmlFor={this.props.htmlFor} style={style}>{this.props.value}</label>;
  }
}

export default TextInput;
