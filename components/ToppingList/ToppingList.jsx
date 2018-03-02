import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToppingItem from './ToppingItem/ToppingItem';

const StyledToppingList = styled.ul`
  display: block;
  width: 90%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledPrice = styled.h1`
  font-family: Roboto;
  color: white;
`;

const ToppingList = (props) => {
  const { toppings, selection } = props;
  return (
    <StyledToppingList>
      {_.map(toppings, topping => (
        <ToppingItem
          key={topping.sys.id}
          name={topping.fields.name}
          description={topping.fields.description}
          price={topping.fields.price}
          amount={selection[topping.fields.name] ? selection[topping.fields.name].amount : 0}
          max={topping.fields.max}
        />
      ))}
      <StyledPrice>Prix : {props.selection.price.toFixed(2)}€</StyledPrice>
    </StyledToppingList>
  );
};

ToppingList.propTypes = {
  toppings: PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }).isRequired,
  selection: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ToppingList;
