import '../../less/components/links.less';

import React from 'react';

class Links extends React.Component {
  render() {
    var classes = 'links';
    if (this.props.open) classes += ' open';
    return (
      <ul className={classes}>
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

export default class LinksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      open: false
    };
  }
  toggleMenu(e) {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className="links-container">
        <button onClick={this.toggleMenu} >•••</button>
        <Links open={this.state.open} />
      </div>
    );
  }
}