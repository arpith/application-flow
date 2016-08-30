import React from 'react';
import Header from './Header.jsx';
import Step from './Step.jsx';
import SubmitButton from './SubmitButton.jsx';

class App extends React.Component {
  render() {
    const style = {
      width: '42%',
      minWidth: '350px',
      margin: 'auto',
      padding: '2em',
      fontFamily: 'gotham, avenir',
    };
 
    return (
      <div>
        <Header />
        <div style={style}>
          <Step number={4} />
          <SubmitButton />
        </div>
      </div>
    );
  }
}

export default App
