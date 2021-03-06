import '../../less/components/header.less';

import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Links from './Links';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Container>
          <Logo />
          <button className="app-button refresh" onClick={this.props.refresh} >&#8635;</button>
          <Links setLink={this.props.setLink} list={this.props.list} />
        </Container>
      </header>
    );
  }
}