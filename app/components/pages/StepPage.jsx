import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Step from '../Step.jsx';
import Button from '../Button.jsx';
import { submit } from '../../actions';

function StepPage({furthest, step, onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <Step number={step} />
      <Button value="Submit" disabled={furthest>4} />
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    furthest: state.furthest,
    step: ownProps.params.step,
  };
}

function mapDispatchToProps(dispatch, {history}) {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      dispatch(submit(() => dispatch(push('/'))));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StepPage);
