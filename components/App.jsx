import React from 'react';
import Header from './header.jsx';
import Step from './step.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Step number={4} />
      </div>
    );
  }
}

export default App
