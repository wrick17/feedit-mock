import '../../less/components/feed.less';

import React from 'react';
import FeedImage from './FeedImage';

export default class Feed extends React.Component {
  render() {
    return (
      <li className="feed">
        <a href={this.props.link} target="_blank">
          <FeedImage imageUrl={this.props.image} />
          <div className="feed-title"><span>{this.props.title}</span></div>
        </a>
      </li>
    );
  }
};