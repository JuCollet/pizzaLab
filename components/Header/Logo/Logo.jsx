import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
  width: ${props => props.width};
  cursor: ${props => (props.pointer ? 'pointer' : 'auto')};
`;

const Logo = props => (
  <Img
    src="/static/logo.png"
    alt="PizzaLab"
    pointer={props.pointer}
    width={props.width}
  />
);

Logo.propTypes = {
  pointer: PropTypes.bool,
  width: PropTypes.oneOf(['90px']),
};

Logo.defaultProps = {
  pointer: false,
  width: '90px',
};

export default Logo;
