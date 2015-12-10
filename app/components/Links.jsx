import '../../less/components/links.less';

import React from 'react';

class Link extends React.Component {
  render() {
    var link = '/feeds' + this.props.link;
    return (<li><a href={link} >{this.props.title}</a></li>);
  }
}

class Links extends React.Component {
  render() {
    var classes = 'links', id = 0, linksArray = [], links = this.props.list;
    linksArray = links.map(function(link) {
      return <Link key={id++} title={link.title} link={link.link} />;
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
        <Links open={this.state.open} list={this.props.list} />
      </div>
    );
  }
}