import React, { PureComponent } from 'react';
import Link from 'next/link';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import ButtonCheckout from '../Button/ButtonCheckout';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { userHasScrolled: false };
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
    this.onScrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    let userHasScrolled;
    if (window.pageYOffset > 10) userHasScrolled = true;
    else userHasScrolled = false;
    this.setState({ userHasScrolled });
  }

  render() {
    return (
      <nav className={this.state.userHasScrolled ? 'nav-small' : null}>
        <Link href="/">
          <a className="header-logo"><Logo height="125" className="header-logo-img" /></a>
        </Link>
        <Menu />
        <Link href="/checkout">
          <a className="header-checkout-button"><ButtonCheckout /></a>
        </Link>
        <style jsx>{`
          nav { 
            position: fixed;
            display: flex;
            z-index: 99999;
            align-items: center;
            top: 0;
            height: 100px;
            width: 100%;
            transition: .25s;
          }
          .header-logo {
            align-self: flex-start;
            width: 120px;
            margin-left: 50px;
          }
          .header-checkout-button {
            position: absolute;
            right: 50px;
            text-decoration: none;
          }
          .nav-small {
            height: 75px;
            background-color: #1E1E1E;
          }
          :global(.header-logo-img){
            transition: .25s;
          }
          :global(.nav-small .header-logo .header-logo-img) {
            height: 94px;
          }
        `}
        </style>
      </nav>
    );
  }
}

export default Header;
