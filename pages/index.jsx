import withRedux from 'next-redux-wrapper';
import React from 'react';

import Layout from '../components/Layout';
import initStore from '../store';

const Index = () => (
  <Layout>
    <div>
      <h1>Index</h1>
    </div>
  </Layout>
);

export default withRedux(initStore, null, null)(Index);

