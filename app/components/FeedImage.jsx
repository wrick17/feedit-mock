import '../../less/components/feedImage.less';

import React from 'react';

export default class FeedImage extends React.Component {
  render() {
    return (
      <div className="feed-image" style={{
        backgroundImage: 'url(' + this.props.imageUrl + ')'
      }} />
    );
  }
};