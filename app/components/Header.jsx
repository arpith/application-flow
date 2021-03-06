import React from 'react';
import Logo from './Logo.jsx';
import MenuButton from './MenuButton.jsx';
import Dropdown from './Dropdown.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldDisplayDropdown: false};
    this.toggleDropdown = () => {
      const newState = !this.state.shouldDisplayDropdown;
      this.setState({shouldDisplayDropdown: newState});
    };
  }
 
  render() {
    const style = {
      padding: '0.5em',
      paddingTop: '0.8em',
      paddingBottom: '0.9em',
      borderBottom: 'thin solid #D7DBDD'
    };

    const menuButton = this.props.shouldDisplayMenu ? <MenuButton onClick={this.toggleDropdown} /> : null;
    let dropdown = null;
    if (this.props.shouldDisplayMenu && this.state.shouldDisplayDropdown) {
      dropdown = <Dropdown toggle={this.toggleDropdown} />;
    }

    return (
      <div style={style}>
        <Logo />
        {menuButton}
        {dropdown}
      </div>
    );
  }
}

export default Header;
