import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextLink from 'next/link';

const Li = styled.li`
  position: relative;
  display: inline-block;
  margin: 0px 0px 0px 75px;
  padding: 0;
  font-family: Bitter;
  text-decoration: none;
  color: #FFFFFF;
  cursor: pointer;
  &:after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -6px;
    left: 0px;
    width: 0;
    background: white;
    transition: .25s ease-out;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

const Link = props => (
  <Li>
    <NextLink href={props.page}>
      <a>{props.title}</a>
    </NextLink>
  </Li>
);

Link.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Link;
