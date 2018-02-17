import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';

const Layout = props => (
  <div className="Layout">
    <Header />
    <div className="content">
      { props.children }
    </div>
    <style jsx>{`
        .Layout {
          height: 100%;
        }
        .content {
          padding-top: 100px;
          height: calc(100% - 100px);
        }
    `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
