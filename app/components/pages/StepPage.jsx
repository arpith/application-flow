import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Step from '../Step.jsx';
import Button from '../Button.jsx';
import {submit} from '../../actions';

function StepPage({furthest, step}) {
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(() => push({}, '/')));
  };

  let button = '';
  if (furthest < 5) button = <Button value="Submit" />;

  return (
    <form onSubmit={onSubmit}>
      <Step number={step} />
      {button}
    </form>
  );
}

export default connect(
  (state, ownProps) => ({
    furthest: state.furthest,
    step: ownProps.params.step
  })
)(StepPage);
