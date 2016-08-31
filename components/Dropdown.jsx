import React from 'react';

class Dropdown extends React.Component {
  render() {
    const itemStyle = {
      listStyle: 'none',
      paddingLeft: '1.4em',
      fontSize: '0.8em',
      lineHeight: '1.8em'
    };
    const listStyle = {
      border: 'thin solid #D7DBDD',
      borderRadius: '0.2em',
      boxShadow: '2px 1px 5px #D7DBDD',
      padding: 0,
      paddingTop: '0.4em',
      paddingBottom: '0.4em',
      margin: 0,
      width: '8em',
      position: 'absolute',
      right: '1em',
      background: 'white'
    };
    const logoutStyle = Object.assign({
      borderTop: 'thin solid #D7DBDD',
      marginTop: '0.4em',
      paddingTop: '0.2em'
    }, itemStyle);

    const items = (i) => <li style={itemStyle} key={i}>Step {i+1}</li>;
    const list = (n) => [...Array(n).keys()].map(items);

    return (
      <ul style={listStyle}>
        {list(5)}
        <li key='logout' style={logoutStyle}>Logout</li>
      </ul>
    );
  }
}

export default Dropdown;
