import React, { PropTypes } from 'react';
import MenuItem from './MenuItem.jsx';

class Dropdown extends React.Component {
  static contextTypes = {
    store: PropTypes.any
  };

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
    
    const enabled = (i) => i < this.context.store.getState().furthest;
    const items = (i) => <MenuItem key={i} value={`Step ${i+1}`} link={`/step/${i+1}`} enabled={enabled(i)} />;
    const list = (n) => [...Array(n).keys()].map(items);

    return (
      <ul style={style}>
        {list(5)}
        <MenuItem key='logout' value='Logout' link='/' enabled={true}/>
      </ul>
    );
  }
}

export default Dropdown;
