import React from 'react';
import Step from '../Step.jsx';
import Button from '../Button.jsx';

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
        <Button value="Submit"/>
      </div>
    );
  }
}

export default StepPage;
