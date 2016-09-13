import React from 'react';
import onClickOutside from 'react-onclickoutside';
import StepLink from './StepLink.jsx';
import LogoutButton from './LogoutButton.jsx';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.props.toggle;
  }

  render() {
    const style = {
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
    
    const steplink = (i) => <StepLink step={i+1} />;
    const list = (n) => [...Array(n).keys()].map(steplink);

    return (
      <div style={style}>
        {list(5)}
        <LogoutButton />
      </div>
    );
  }
}

export default onClickOutside(Dropdown, (instance) => instance.handleClickOutside);
