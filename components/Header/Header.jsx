import React from 'react';
import Link from 'next/link';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import ButtonCheckout from '../Button/ButtonCheckout';

const Header = () => (
  <nav>
    <Link href="/">
      <a className="header-logo"><Logo /></a>
    </Link>
    <Menu />
    <Link href="/checkout">
      <a className="header-checkout-button"><ButtonCheckout /></a>
    </Link>
    <style jsx>{`
      nav { 
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        height: 100px;
        width: 100%;
      }
      .header-logo {
        align-self: flex-start;
        margin-left: 50px;
      }
      .header-checkout-button {
        position: absolute;
        right: 50px;
        text-decoration: none;
      }
    `}
    </style>
  </nav>
);

export default Header;
