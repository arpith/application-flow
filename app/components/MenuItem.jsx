import React from 'react';
import { Link } from 'react-router';

class MenuItem extends React.Component {
  render() {
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
    
    if (!this.props.enabled) itemStyle.color = 'D7DBDD';
    
    const listItem = <li style={itemStyle}>{this.props.value}</li>;
    const link = <Link to={this.props.link} style={linkStyle}>{listItem}</Link>;

    if (this.props.enabled) return link;
    else return listItem;
  }
}

export default MenuItem;
