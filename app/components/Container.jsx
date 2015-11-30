import '../../less/components/container.less';

import React from 'react';

export default class Container extends React.Component {
  render() {

    var classes = 'container ';
    if (this.props.className) classes += this.props.className;
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
};