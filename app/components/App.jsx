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

    const pagesWithoutMenu = ['/login', '/signup'];
    const shouldDisplayMenu = !pagesWithoutMenu.includes(this.props.location.pathname);
 
    return (
      <div>
        <Header shouldDisplayMenu={shouldDisplayMenu} />
        <div style={style}>
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}

export default App
