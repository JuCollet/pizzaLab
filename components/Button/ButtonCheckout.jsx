import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/colors';

const StyledButtonCheckout = styled.div`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 20px;
  background-color: ${colors.red};
  font-family: Roboto;
  font-size: .9em;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: .2s;
  &:hover {
    background-color: ${colors.darkRed};
  }
`;

const Amount = styled.span`
  position: absolute;
  font-weight: normal;
  animation: amount-price .5s;
  @keyframes amount-price {
    0% {opacity: 1}
    30% {transform: translateY(10px); opacity: 0;}
    31% {transform: translateY(-10px); opacity: 0;}
    100% {transform: translateY(0px); opacity: 1;}
  }
`;

const AmountGhost = styled.span`
  opacity: 0;
`;

const ButtonCheckout = props => (
  <StyledButtonCheckout>
    <Amount>{props.amount}€&nbsp;</Amount>
    <AmountGhost>{props.amount}€&nbsp;</AmountGhost>
    <span>|&nbsp;</span>
    <span className="button-checkout-text">commander</span>
  </StyledButtonCheckout>
);

ButtonCheckout.propTypes = {
  amount: PropTypes.number,
};

ButtonCheckout.defaultProps = {
  amount: 0,
};

export default ButtonCheckout;
