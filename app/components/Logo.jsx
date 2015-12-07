import '../../less/components/logo.less';

import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a href="/hot"><label>Feedit</label><span>Beta</span></a>
      </div>
    );
  }
};