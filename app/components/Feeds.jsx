import '../../less/components/feeds.less';

import React from 'react';
import Container from './Container';
import Feed from './Feed';
import Loader from './Loader';

export default class Feeds extends React.Component {
  render() {
    var feed, feeds = [], feedsData = this.props.feeds;
    for (feed in feedsData) {
      feeds.push(<Feed key={feedsData[feed].data.id} image={feedsData[feed].data.thumbnail} title={feedsData[feed].data.title} link={feedsData[feed].data.url} />)
    }
    if (feeds.length === 0) feeds = [<Loader />];
    return (
      <div className="feeds-container">
        <Container>
          <ul className="feeds">
            {feeds}
          </ul>
        </Container>
      </div>
    );
  }
}