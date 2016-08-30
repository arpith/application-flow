import React from 'react';
import Logo from './Logo.jsx';
import MenuButton from './MenuButton.jsx';

class Header extends React.Component {
  render() {
    const style = {
      padding: '0.5em',
      paddingTop: '0.8em',
      paddingBottom: '0.9em',
      borderBottom: 'thin solid #D7DBDD'
    };
    return (
      <div style={style}>
        <Logo />
        <MenuButton />
      </div>
    );
  }
}

export default Header;
