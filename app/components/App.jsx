import '../../less/components/app.less';

import React from 'react';
import Feeds from './Feeds.jsx';
import Header from './Header.jsx';
import purl from 'purl';
import superagent from 'superagent';

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
    return 'http://reddit.com/' + this.fetchLink(link) + '.json?limit=100';
  }
  fetchData(link) {
    var that = this;
    superagent
      .get('/getData')
      .query({ link: that.fetchDataUrl(link) })
      .end(function(err, res) {
        if (err) console.log(err);
        console.log(JSON.parse(res.text));
        that.setState({
          data: JSON.parse(res.text).data.children
        });
      });

  }
  componentDidMount() {
    var link = purl(window.location).pathname.slice(7);
    if (link === '') window.location = '/feeds/hot';
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