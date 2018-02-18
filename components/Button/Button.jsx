import React from 'react';
import PropTypes from 'prop-types';

import colors from '../colors';

const Button = props => (
  <div className={`button ${props.color} ${props.size}`}>
    {props.title}
    <style jsx>{`
      .button {
        font-family: Roboto;
        font-weight: 400;
        color: white;
        cursor: pointer;
        transition: .25s;
        text-transform: uppercase;
      }
      .btn-30 {
        padding: 10px 25px;
        border-radius: 40px;
        font-size: 1.2em;
      }
      .btn-red {
        background-color: ${colors.red}
      }
      .btn-red:hover {
        background-color: ${colors.darkRed}
      }
    `}
    </style>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['btn-red']).isRequired,
  size: PropTypes.oneOf(['btn-30']).isRequired,
};

export default Button;
