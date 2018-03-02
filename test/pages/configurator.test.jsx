import React from 'react'; // eslint-disable-line no-unused-vars
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Configurator from '../../pages/configurator';

const mockFetchingData = {
  configurator: {
    toppings: {
      ananas: {
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
      anchoix: {
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
    },
    selection: {
      ananas: {
        amount: 1,
      },
      price: 9.5,
    },
  },
  toppingsFetch: sinon.spy(),
  isFetching: true,
};

const mockData = {
  configurator: {
    toppings: {
      ananas: {
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
      anchoix: {
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
    },
    selection: {
      ananas: {
        amount: 1,
      },
      price: 9.5,
    },
  },
  toppingsFetch: sinon.spy(),
  isFetching: false,
};

const mockStore = configureStore([thunk])(mockData);
const mockFetchingStore = configureStore([thunk])(mockFetchingData);

describe('Configurator', () => {
  it('Should render if data is fetched', () => {
    const wrapper = mount(<Configurator store={mockStore} />);
    expect(wrapper.find('ToppingList').exists()).to.eql(true);
  });
  it('Should not render if data is fetching', () => {
    const wrapper = mount(<Configurator store={mockFetchingStore} />);
    expect(wrapper.find('ToppingList').exists()).to.eql(false);
  });
});
