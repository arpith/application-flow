import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function StepLink({ step, furthest}) {
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
  };

  let itemStyle = {
    listStyle: 'none',
    paddingLeft: '1.4em',
    fontSize: '0.8em',
    lineHeight: '1.8em'
  };

  const shouldBeEnabled = step <= furthest;

  if (!shouldBeEnabled) itemStyle.color = 'D7DBDD';
    
  const listItem = <li style={itemStyle}>Step {step}</li>;
  const link = <Link to={`/step/${step}`} style={linkStyle}>{listItem}</Link>;

  if (shouldBeEnabled) return link;
  else return listItem;
}

export default connect(
  (state, ownProps) => ({
    step: ownProps.step,
    furthest: state.furthest
  })
)(StepLink);
