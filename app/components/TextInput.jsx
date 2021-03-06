import React from 'react';

class TextInput extends React.Component {
  render() {
    const style = {
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontWeight: '300',
      border: 'thin solid #D7DBDD',
      color: 'inherit',
      fontSize: '1em',
      margin: '0.2em',
      padding: '0.2em',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.1em',
      borderRadius: '0.2em',
      flex: '1 1 auto'
    };

    let type = this.props.type;
    if (!type) type = "text";

    return <input id={this.props.id}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.props.onChange}
      style={style}
      type={type}
    />;
  }
}

export default TextInput;
