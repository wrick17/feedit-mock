import '../../less/components/links.less';

import React from 'react';

class Link extends React.Component {
  render() {
    var link = '#/feeds' + this.props.link;
    return (<li><a onClick={this.props.onClick} href={link} >{this.props.title}</a></li>);
  }
}

class Links extends React.Component {
  render() {
    var classes = 'links', id = 0, linksArray = [], links = this.props.list, that = this;
    linksArray = links.map(function(link) {
      return <Link onClick={that.props.onClick} key={id++} title={link.title} link={link.link} />;
    });

    if (this.props.open) classes += ' open';
    return (
      <ul className={classes}>
        {linksArray}
      </ul>
    );
  }
};

export default class LinksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      open: false
    };
  }
  toggleMenu(e) {
    this.setState({
      open: !this.state.open
    });
  }
  closeMenu(e) {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div className="links-container">
        <button onClick={this.toggleMenu} className="app-button" >•••</button>
        <Links open={this.state.open} list={this.props.list} onClick={this.closeMenu} />
      </div>
    );
  }
}