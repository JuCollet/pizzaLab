import React from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { updateSelection } from '../../../actions/configurator';
import store from '../../../store';
import Counter from '../../Counter/Counter';

const StyledToppingItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  background-color: rgba(1,1,1,.5);
  border-radius: 4px;
`;

const Ingredient = styled.span`
  font-family: Roboto;
  font-weight: 400;
  color: #FFFFFF;
`;

const ToppingItem = props => (
  <StyledToppingItem>
    <Ingredient>{props.name}</Ingredient>
    <Counter
      amount={props.amount}
      max={props.max}
      name={props.name}
      clickHandler={props.updateSelection}
    />
  </StyledToppingItem>
);

ToppingItem.propTypes = {
  name: PropTypes.string.isRequired,
  updateSelection: PropTypes.func.isRequired,
  amount: PropTypes.number,
  max: PropTypes.number,
};

ToppingItem.defaultProps = {
  amount: 0,
  max: 3,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSelection }, dispatch);
}
export default withRedux(store, null, mapDispatchToProps)(ToppingItem);
