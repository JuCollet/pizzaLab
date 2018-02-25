import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToppingItem from './ToppingItem/ToppingItem';

const StyledToppingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ToppingList = (props) => {
  const { toppings } = props;
  return (
    <StyledToppingList>
      {toppings.map(topping => (
        <ToppingItem
          key={topping.sys.id}
          name={topping.fields.name}
          description={topping.fields.description}
          price={topping.fields.price}
        />
      ))}
    </StyledToppingList>
  );
};

ToppingList.propTypes = {
  toppings: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
};

export default ToppingList;
