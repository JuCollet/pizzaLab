/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const hoverTransition = `
  &:hover {
    .button-incdec-border {
      fill-opacity: 0;
    }
    .button-incdec-background {
      fill-opacity: 1;
    }
    .button-incdec {
      fill: #0E0E0E;
    }
  }
`;

const StyledButton = styled.svg`
  display: inline-block;
  margin: 0px 7px;
  cursor: ${props => (props.disabled ? '' : 'pointer')};
  opacity: ${props => (props.disabled ? '.2' : '1')};
  ${props => (!props.disabled ? hoverTransition : null)}
  .button-incdec-background {
    fill-opacity: 0;
    fill: #FFFFFF;
    transition: .25s;
  }
  .button-incdec-border {
    fill-opacity: 1;
    fill: #FFFFFF;
    transition: .25s;
  }
  .button-incdec {
    fill: #FFFFFF;
  }
`;

const ButtonIncDec = (props) => {
  const onClickHandler = () => {
    if (!props.disabled) {
      props.clickHandler(props.name, props.add === true);
    }
  };

  return (
    <StyledButton
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      onClick={onClickHandler}
      disabled={props.disabled}
    >
      <path className="button-incdec-border" d="M10 1.501c4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5-4.687 0-8.5-3.813-8.5-8.5 0-4.687 3.813-8.5 8.5-8.5m0-1.5c-5.522 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c-.001-5.523-4.478-10-10-10z" />
      <circle className="button-incdec-background" cx={props.size / 2} cy={props.size / 2} r={props.size / 2} />
      {props.add ? <ButtonInc /> : <ButtonDec />}
    </StyledButton>
  );
};

const ButtonDec = () => (
  <path className="button-incdec" d="M15 10a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1z" />
);

const ButtonInc = () => (
  <path className="button-incdec" d="M14 9h-3V6a1 1 0 0 0-2 0v3H6a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2z" />
);

ButtonIncDec.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  size: PropTypes.oneOf([20]),
  add: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

ButtonIncDec.defaultProps = {
  size: 20,
  add: false,
  disabled: false,
};

export default ButtonIncDec;
