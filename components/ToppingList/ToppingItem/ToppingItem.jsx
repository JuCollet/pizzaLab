import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledToppingItem = styled.li`
  background-color: white;
`;

const Ingredient = styled.span`
`;


const ToppingItem = props => (
  <StyledToppingItem>
    <Ingredient>{props.name}</Ingredient>
  </StyledToppingItem>
);

ToppingItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ToppingItem;
