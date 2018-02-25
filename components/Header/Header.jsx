import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';

import { tablet } from '../../styles/mediaQueries';
import ButtonCheckout from '../Button/ButtonCheckout';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99999;
  top: 0;
  height: 75px;
  width: 100%;
  background-color: ${props => (props.transparent ? 'transparent' : 'rgba(0,0,0,.85)')};
  transition: .25s;
`;

const LogoWrapper = styled.a`
  align-self: flex-start;
  margin-left: 50px;
`;

const ButtonWrapper = styled.a`
  position: absolute;
  right: 50px;
  ${tablet} {
    display: none;
  }
`;

const Header = props => (
  <Nav transparent={props.transparent} >
    <Link href="/">
      <LogoWrapper><Logo pointer /></LogoWrapper>
    </Link>
    <Menu />
    <Link href="/checkout">
      <ButtonWrapper><ButtonCheckout /></ButtonWrapper>
    </Link>
  </Nav>
);

Header.propTypes = {
  transparent: PropTypes.bool,
};

Header.defaultProps = {
  transparent: false,
};

export default Header;
