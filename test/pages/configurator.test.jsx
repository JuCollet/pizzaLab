import React from 'react'; // eslint-disable-line no-unused-vars
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Configurator from '../../pages/configurator';

const mockFetchingData = {
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
  toppingsFetch: sinon.spy(),
  isFetching: true,
};

const mockData = {
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
  toppingsFetch: sinon.spy(),
  isFetching: false,
};

const mockEmptyData = {
  configurator: {
    toppings: [],
  },
  toppingsFetch: sinon.spy(),
  isFetching: false,
};

const mockStore = configureStore([thunk])(mockData);
const mockFetchingStore = configureStore([thunk])(mockFetchingData);
const mockEmptyStore = configureStore([thunk])(mockEmptyData);

describe('Configurator', () => {
  it('Should render if data is fetched', () => {
    const wrapper = mount(<Configurator store={mockStore} />);
    expect(wrapper.find('ToppingList').exists()).to.eql(true);
  });
  it('Should not render if data is fetching', () => {
    const wrapper = mount(<Configurator store={mockFetchingStore} />);
    expect(wrapper.find('ToppingList').exists()).to.eql(false);
  });
  it('Should not render if data is empty', () => {
    const wrapper = mount(<Configurator store={mockEmptyStore} />);
    expect(wrapper.find('ToppingList').exists()).to.eql(false);
  });
});
