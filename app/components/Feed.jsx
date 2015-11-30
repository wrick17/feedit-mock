import '../../less/components/feed.less';

import React from 'react';
import FeedImage from './FeedImage';

export default class Feed extends React.Component {
  render() {
    return (
      <li className="feed">
        <a href="#">
          <FeedImage imageUrl="http://goo.gl/1tAHMc" />
          <div className="feed-title"><span>Nexus 5X goes viral around the web</span></div>
        </a>
      </li>
    );
  }
};