import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buttonColors } from '../../styles/colors';

const StyledButton = styled.div`
  display: inline-block;
  padding: ${props => `${props.size / 5}px ${props.size / 2}px`};
  margin-right: 15px;
  border-radius: ${props => `${props.size}px`};
  background-color: ${props => buttonColors[props.color].background}; 
  font-family: Roboto;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  font-size: ${props => `${props.size / 3}px`};
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: ${props => buttonColors[props.color].hoverBackground};
  }
`;

const Button = props => (
  <StyledButton color={props.color} size={props.size} onClick={props.clickHandler} >
    {props.title}
  </StyledButton>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'grey']),
  size: PropTypes.oneOf([50, 40]),
};

Button.defaultProps = {
  color: 'red',
  size: 50,
};

export default Button;
