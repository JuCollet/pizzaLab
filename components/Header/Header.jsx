import React from 'react';
import Menu from './Menu/Menu';
import ButtonCheckout from '../Button/ButtonCheckout';

const Header = () => (
  <nav>
    <img className="logo" src="/static/logo.png" alt="Pizza Labo" width="120" />
    <Menu />
    <ButtonCheckout />
    <style jsx>{`
      nav { 
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        height: 100px;
        width: 100%;
      }
      .logo {
        align-self: flex-start;
        margin-left: 50px;
      }
    `}
    </style>
  </nav>
);

export default Header;
