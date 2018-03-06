import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { expect } from 'chai';

import mockStore from '../../mockStore';
import ToppingList from '../../../components/ToppingList/ToppingList';

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
