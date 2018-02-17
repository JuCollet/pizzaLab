import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
  <img
    {...props}
    height={props.height}
    src="/static/logo.png"
    alt="Pizza Labo"
  />
);

Logo.propTypes = {
  height: PropTypes.oneOf(['100', '125']).isRequired,
};

export default Logo;
