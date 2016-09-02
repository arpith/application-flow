import React from 'react';
import Step from './Step.jsx';
import SubmitButton from './SubmitButton.jsx';

class StepPage extends React.Component {
  render() {
    const style = {
      width: '42%',
      minWidth: '350px',
      margin: 'auto',
      padding: '2em',
      fontFamily: 'gotham, avenir'
    };
 
    return (
      <div style={style}>
        <Step number={this.props.params.step} />
        <SubmitButton />
      </div>
    );
  }
}

export default StepPage;
