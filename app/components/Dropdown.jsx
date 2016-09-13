import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem.jsx';
import LogoutButton from './LogoutButton.jsx';

function Dropdown({ furthest }) {
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
    
  const enabled = (i) => i < furthest;
  const generateItem = (i) => {
    return (
      <MenuItem key={i} 
        value={`Step ${i+1}`} 
        link={`/step/${i+1}`} 
        enabled={enabled(i)} 
      />
    );
  };
  const list = (n) => [...Array(n).keys()].map(generateItem);

  return (
    <ul style={style}>
      {list(5)}
      <LogoutButton />
    </ul>
  );
}

export default connect(
  state => ({
    furthest: state.furthest
  })
)(Dropdown);
