import '../../less/components/app.less';

import React from 'react';
import Feeds from './Feeds.jsx';
import Header from './Header.jsx';
import superagent from 'superagent';
import purl from 'purl';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setLink = this.setLink.bind(this);
    this.state = {
      data: [],
      link: 'hot'
    };
  }
  fetchLink(link) {
    if (link === 'hot') return 'hot';
    return 'r/' + link;
  }
  fetchDataUrl(link) {
    return 'https://reddit.com/' + this.fetchLink(link) + '.json?limit=100';
  }
  fetchData(link) {
    var that = this;
    superagent
      .get(that.fetchDataUrl(link))
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) return console.log(err);
        that.setState({
          data: JSON.parse(res.text).data.children
        });
      });
  }
  componentDidMount() {
    var link = purl(window.location).pathname.slice(1);
    if (link === '') window.location = '/hot';
    this.setState({
      link: link
    });
    this.fetchData(link);
  }
  setLink(link) {
    this.setState({
      link: link,
      data: []
    });
    this.fetchData(link);
  }
  render() {
    return (
      <div className="app">
        <Header setLink={this.setLink} />
        <Feeds feeds={this.state.data} />
      </div>
    );
  }
};