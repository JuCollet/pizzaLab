import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    <Counter counter={0} />
  </StyledToppingItem>
);

ToppingItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ToppingItem;
