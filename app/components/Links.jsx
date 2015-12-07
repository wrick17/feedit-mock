import '../../less/components/links.less';

import React from 'react';

export default class Links extends React.Component {
  choosePics(e) {
    this.props.setLink(e.target.dataset.link);
  }
  render() {
    return (
      <ul className="links">
        <li><a href="/hot" >hot</a></li>
        <li><a href="/gadgets" >gadgets</a></li>
        <li><a href="/sports" >sports</a></li>
        <li><a href="/gaming" >gaming</a></li>
        <li><a href="/pics" >pics</a></li>
        <li><a href="/worldnews" >worldnews</a></li>
      </ul>
    );
  }
};