import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = props => (
  <li className="link">
    <NextLink href={props.page}>
      <a>{props.title}</a>
    </NextLink>
    <style jsx>{`
      .link {
        position: relative;
        display: inline-block;
        margin: 0px 0px 0px 50px;
        padding: 0;
        font-family: Bitter;
        text-decoration: none;
        color: #FFFFFF;
        cursor: pointer;
      }
      .link > a {
        text-decoration: none;
        color: #FFFFFF;
      }
      .link:after {
        position: absolute;
        content: '';
        height: 2px;
        bottom: -6px;
        left: 0px;
        width: 0;
        background: white;
        transition: .25s ease-out;
      }
      .link:hover:after {
        width: 100%;
      }
    `}
    </style>
  </li>
);

Link.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Link;
