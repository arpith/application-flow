import React from 'react';
import Step from '../Step.jsx';
import Button from '../Button.jsx';

class StepPage extends React.Component {
  render() {
    return (
      <div>
        <Step number={this.props.params.step} />
        <Button value="Submit"/>
      </div>
    );
  }
}

export default StepPage;
