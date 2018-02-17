import React from 'react';
import PropTypes from 'prop-types';

const ButtonCheckout = props => (
  <div className="button-checkout">
    <span className="button-checkout-amount">{props.amount}€&nbsp;</span>
    <span className="button-checkout-amount-ghost">{props.amount}€&nbsp;</span>
    <span>|&nbsp;</span>
    <span className="button-checkout-text">COMMANDER</span>
    <style jsx>{`
      .button-checkout {
        position: absolute;
        right: 50px;
        padding: 5px 10px;
        border-radius: 3px;
        background-color: #FF6347;
        font-family: Roboto;
        font-size: .9em;
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
        background-color: #ea4f33;
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
