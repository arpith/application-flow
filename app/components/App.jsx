import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  render() {
    const style = {
      width: '42%',
      minWidth: '350px',
      margin: 'auto',
      padding: '2em',
      fontFamily: 'gotham, avenir',
    };

    const shouldDisplayMenu = this.props.location.pathname != '/login';
 
    return (
      <div>
        <Header shouldDisplayMenu={shouldDisplayMenu} />
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default App
