import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonIncDec from './ButtonIncDec/ButtonIncDec';

const StyledCounter = styled.div`
  display: inline-block;
  position: absolute;
  right: 5px;
  height: ${props => props.size}px;
`;

const StyledCounterText = styled.span`
  position: absolute;
  font-family: Roboto;
  color: white;
  vertical-align: top;
  height: ${props => props.size}px;
  font-size: ${props => props.size}px;
  animation: amount-price .5s;
  @keyframes amount-price {
    0% {opacity: 1}
    30% {transform: translateY(5px); opacity: 0;}
    31% {transform: translateY(-5px); opacity: 0;}
    100% {transform: translateY(0px); opacity: 1;}
  }
`;

const StyledCounterTextGhost = styled.span`
  font-family: Roboto;
  vertical-align: top;
  height: ${props => props.size}px;  
  font-size: ${props => props.size}px;
  opacity: 0;
`;

const Counter = props => (
  <StyledCounter size={props.size}>
    <ButtonIncDec
      clickHandler={props.clickHandler}
      name={props.name}
      disabled={props.amount === 0}
    />
    <StyledCounterText size={props.size}>{props.amount}</StyledCounterText>
    <StyledCounterTextGhost size={props.size}>{props.amount}</StyledCounterTextGhost>
    <ButtonIncDec
      add
      clickHandler={props.clickHandler}
      name={props.name}
      disabled={props.amount >= props.max}
    />
  </StyledCounter>
);

Counter.propTypes = {
  amount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([20]),
  max: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  size: 20,
};

export default Counter;
