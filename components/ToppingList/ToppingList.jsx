import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToppingItem from './ToppingItem/ToppingItem';

const StyledToppingList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0px 0px 25px 0px;
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
