import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Router from 'next/router';

import Index from '../../pages/index';

const mountWithStore = (component, store) => {
  const context = {
    store,
  };
  return mount(component, { context });
};

describe('Index', () => {
  it('exists', () => {
    const testState = {
      showBox: {},
    };
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Index />, store);
    expect(wrapper.exists()).toBe(true); // eslint-disable-line no-undef
  });
  describe('Button', () => {
    it('Should route to configurator page', () => {
      Router.push = jest.fn(); // eslint-disable-line no-undef
      const testState = {
        showBox: {},
      };
      const store = createMockStore(testState);
      const wrapper = shallow(<Index />, { context: { store } });
      const buttonComp = wrapper.dive().dive().dive().find('Button')
        .first();
      buttonComp.props().clickHandler();
      expect(Router.push).toBeCalledWith('/configurator'); // eslint-disable-line no-undef
    });
  });
});
