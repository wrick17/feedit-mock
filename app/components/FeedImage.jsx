import '../../less/components/feedImage.less';

import React from 'react';

export default class FeedImage extends React.Component {
  imageUrl() {
    if (this.props.imageUrl !== 'self' && this.props.imageUrl !== 'default') return this.props.imageUrl;
    return 'http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png';
  }
  render() {
    return (
      <div className="feed-image" style={{
        backgroundImage: 'url(' + this.imageUrl() + ')'
      }} />
    );
  }
};