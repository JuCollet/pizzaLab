import React from 'react'; // eslint-disable-line no-unused-vars
import configureStore from 'redux-mock-store';
import Router from 'next/router';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

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
    expect(wrapper.find('ToppingList').exists()).toBe(true); // eslint-disable-line no-undef
  });
  it('Should not render if data is fetching', () => {
    const wrapper = mount(<Configurator store={mockFetchingStore} />);
    expect(wrapper.find('ToppingList').exists()).toBe(false); // eslint-disable-line no-undef
  });
  describe('Add to basket button', () => {
    it('Should pass the correction event handler', () => {
      const store = mockStore;
      Router.push = jest.fn(); // eslint-disable-line no-undef
      const wrapper = shallow(<Configurator />, { context: { store } });
      const buttonComp = wrapper.dive().dive().dive().find('Button')
        .first();
      buttonComp.props().clickHandler();
      expect(Router.push).toBeCalledWith('/checkout'); // eslint-disable-line no-undef
    });
  });
});
