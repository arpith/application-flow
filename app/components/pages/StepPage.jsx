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

  return (
    <form onSubmit={onSubmit}>
      <Step number={step} />
      <Button value="Submit" disabled={furthest>4} />
    </form>
  );
}

export default connect(
  (state, ownProps) => ({
    furthest: state.furthest,
    step: ownProps.params.step
  })
)(StepPage);
