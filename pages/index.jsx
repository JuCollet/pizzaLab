import withRedux from 'next-redux-wrapper';
import React from 'react';

import Layout from '../components/Layout';
import initStore from '../store';

const style = `
  @import url('https://fonts.googleapis.com/css?family=Bitter');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  body {
    background-image: url("/static/background.jpg");
    background-size: cover;
  }
`;

const Index = () => (
  <Layout>
    <div style={{ height: '100%' }}>
      <h1>Index</h1>
    </div>
    <style jsx global>{style}</style>
  </Layout>
);

export default withRedux(initStore, null, null)(Index);

