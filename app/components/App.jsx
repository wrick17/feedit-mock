import '../../less/components/app.less';

import React from 'react';
import Feeds from './Feeds.jsx';
import Header from './Header.jsx';
import superagent from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var that = this;
    superagent
      .get('http://reddit.com/r/gadgets.json?limit=100')
      .end(function(err, res) {
        if (err) return console.log(err);
        that.setState({
          data: JSON.parse(res.text).data.children
        });
      });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Feeds feeds={this.state.data} />
      </div>
    );
  }
};