import React from 'react';
import Header from './Header.jsx';
import Step from './Step.jsx';
import SubmitButton from './SubmitButton.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Step number={4} />
        <SubmitButton />
      </div>
    );
  }
}

export default App
