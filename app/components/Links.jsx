import '../../less/components/links.less';

import React from 'react';

export default class Links extends React.Component {
  choosePics(e) {
    this.props.setLink(e.target.dataset.link);
  }
  render() {
    return (
      <ul className="links">
        <li><a href="/feeds/hot" >hot</a></li>
        <li><a href="/feeds/gadgets" >gadgets</a></li>
        <li><a href="/feeds/sports" >sports</a></li>
        <li><a href="/feeds/gaming" >gaming</a></li>
        <li><a href="/feeds/pics" >pics</a></li>
        <li><a href="/feeds/worldnews" >worldnews</a></li>
      </ul>
    );
  }
};