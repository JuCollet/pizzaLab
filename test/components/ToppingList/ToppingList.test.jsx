import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { expect } from 'chai';

import ToppingList from '../../../components/ToppingList/ToppingList';

const mockStore = {
  configurator: {
    toppings: [
      {
        fields: {
          name: 'Ingredient 1',
          description: 'description 1',
          price: 0.5,
          max: 3,
        },
        sys: {
          id: 'id 1',
        },
      },
      {
        fields: {
          name: 'Ingredient 2',
          description: 'description 2',
          price: 0.75,
          max: 2,
        },
        sys: {
          id: 'id 2',
        },
      },
    ],
  },
};

describe('ToppingList', () => {
  it('should have correct amount of items', () => {
    const wrapper = mount(<ToppingList toppings={mockStore.configurator.toppings} />);
    expect(wrapper.find('li')).to.have.length(2);
  });
});
