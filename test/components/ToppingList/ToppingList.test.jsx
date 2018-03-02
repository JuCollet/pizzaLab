import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { expect } from 'chai';

import ToppingList from '../../../components/ToppingList/ToppingList';

const mockStore = {
  configurator: {
    toppings: {
      ananas: {
        fields: {
          name: 'ananas',
          description: 'description 1',
          price: 0.5,
          max: 3,
        },
        sys: {
          id: 'id 1',
        },
      },
      anchoix: {
        fields: {
          name: 'anchoix',
          description: 'description 2',
          price: 0.75,
          max: 2,
        },
        sys: {
          id: 'id 2',
        },
      },
    },
    selection: {
      ananas: {
        amount: 1,
      },
      price: 9.5,
    },
  },
};

describe('ToppingList', () => {
  it('should have correct amount of items', () => {
    const wrapper = mount(<ToppingList
      toppings={mockStore.configurator.toppings}
      selection={mockStore.configurator.selection}
    />);
    expect(wrapper.find('li')).to.have.length(2);
  });
  it('should pass the correct amount of selected item by props', () => {
    const wrapper = mount(<ToppingList
      toppings={mockStore.configurator.toppings}
      selection={mockStore.configurator.selection}
    />);
    expect(wrapper.find({ name: 'ananas' }).first().prop('amount')).to.eql(1);
    expect(wrapper.find({ name: 'anchoix' }).first().prop('amount')).to.eql(0);
  });
});
