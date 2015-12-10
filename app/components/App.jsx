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
      list: [],
      link: 'hot'
    };
  }
  fetchDataUrl(link) {
    return 'http://reddit.com/' + link + '.json?limit=100';
  }
  fetchData(link) {
    var that = this;
    superagent
      .get('/getList')
      .end(function(err, res) {
        var data = [], list = [];
        if (err) console.log(err);
        data = JSON.parse(res.text).data.children;
        console.log(data.length);
        list = data.map(function(item) {
          return {
            title: item.data.title,
            link: item.data.url
          };
        });
        that.setState({
          list: list
        });
      });
    superagent
      .get('/getData')
      .query({ link: that.fetchDataUrl(link) })
      .end(function(err, res) {
        if (err) console.log(err);
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
        <Header setLink={this.setLink} list={this.state.list} />
        <Feeds feeds={this.state.data} />
      </div>
    );
  }
};