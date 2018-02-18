import React from 'react';
import PropTypes from 'prop-types';

import colors from '../colors';

const ButtonCheckout = props => (
  <div className="button-checkout">
    <span className="button-checkout-amount">{props.amount}€&nbsp;</span>
    <span className="button-checkout-amount-ghost">{props.amount}€&nbsp;</span>
    <span>|&nbsp;</span>
    <span className="button-checkout-text">commander</span>
    <style jsx>{`
      .button-checkout {
        padding: 7px 14px;
        border-radius: 20px;
        background-color: ${colors.red};
        font-family: Roboto;
        font-size: .9em;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        transition: .2s;
      }
      .button-checkout-amount {
        position: absolute;
        font-weight: normal;
        animation: amount-price .5s;
      }
      .button-checkout-amount-ghost {
        opacity: 0;
      }
      @keyframes amount-price {
        0% {opacity: 1}
        30% {transform: translateY(10px); opacity: 0;}
        31% {transform: translateY(-10px); opacity: 0;}
        100% {transform: translateY(0px); opacity: 1;}
      }
      .button-checkout:hover {
        background-color: ${colors.darkRed};
      }
    `}
    </style>
  </div>
);

ButtonCheckout.propTypes = {
  amount: PropTypes.number,
};

ButtonCheckout.defaultProps = {
  amount: 0,
};

export default ButtonCheckout;
