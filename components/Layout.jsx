import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header/Header';

const LayoutWrapper = styled.div`
  height: 100%;
  background-image: url("/static/index-background.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const Layout = props => (
  <LayoutWrapper>
    <Header />
    { props.children }
    <style jsx global>{`
      html, body, #__next {
        padding: 0;
        margin: 0;
        height: 100%;
      }
      a {
        text-decoration: none;
        color: inherit;
      } 
    `}
    </style>
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
