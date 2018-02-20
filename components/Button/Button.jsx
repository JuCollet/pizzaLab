import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buttonColors } from '../../styles/colors';

const StyledButton = styled.div`
  display: inline-block;
  padding: 10px 25px;
  border-radius: 50px;
  background-color: ${props => buttonColors[props.color].background}; 
  font-family: Roboto;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  font-size: 1.1em;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: ${props => buttonColors[props.color].hoverBackground};
  }
`;

const Button = props => (
  <StyledButton color={props.color} >
    {props.title}
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red']),
};

Button.defaultProps = {
  color: 'red',
};

export default Button;
