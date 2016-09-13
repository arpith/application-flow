import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logout } from '../actions';

function LogoutButton({ onClick }) {
  const style = {
    borderTop: 'thin solid #D7DBDD',
    marginTop: '0.4em',
    paddingTop: '0.2em',
    paddingLeft: '1.4em',
    fontSize: '0.8em',
    lineHeight: '1.8em',
    cursor: 'pointer'
  };
 
  return (
    <div style={style} onClick={onClick}>
      Logout
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(logout(() => dispatch(push('/'))));
    }
  };
}

export default connect(state => state, mapDispatchToProps)(LogoutButton);
