import '../../less/components/app.less';

import React from 'react';
import Feeds from './Feeds.jsx';
import Header from './Header.jsx';

export default () => {
  return (
    <div className="app">
      <Header />
      <Feeds />
    </div>
  );
};