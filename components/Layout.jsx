import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';

const style = `
  @import url('https://fonts.googleapis.com/css?family=Bitter');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');
  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  body {
    background-image: url("/static/background.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
  .Layout {
    height: 100%;
  }
  .content {
    padding-top: 100px;
    height: calc(100% - 100px);
  }
`;

const Layout = props => (
  <div className="Layout">
    <Header />
    <div className="content">
      { props.children }
    </div>
    <style jsx global>{style}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
