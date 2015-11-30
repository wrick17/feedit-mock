import '../../less/components/header.less';

import React from 'react';
import Container from './Container';
import Logo from './Logo';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Container>
          <Logo />
        </Container>
      </header>
    );
  }
}