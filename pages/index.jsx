import withRedux from 'next-redux-wrapper';
import React from 'react';

import initStore from '../store';

const Index = () => (
  <div>
    <h1>Ok biloute</h1>
  </div>
);

export default withRedux(initStore, null, null)(Index);

