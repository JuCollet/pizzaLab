import React from 'react'; // eslint-disable-line no-unused-vars
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';

import History from '../../pages/history';

const shallowWithoutStore = (customProps) => { // eslint-disable-line no-unused-vars
  const props = Object.assign({
    ...customProps,
  });

  const functionMock = sinon.spy();
  const wrapper = shallow(<History {...props} functionToMock={functionMock} />);

  return {
    functionMock,
    wrapper,
  };
};

const mountWithoutStore = (customProps) => { // eslint-disable-line no-unused-vars
  const props = Object.assign({
    ...customProps,
  });

  const functionMock = sinon.spy();
  const wrapper = mount(<History {...props} functionToMock={functionMock} />);

  return {
    functionMock,
    wrapper,
  };
};

const shallowWithStore = (component, store) => { // eslint-disable-line no-unused-vars
  const context = {
    store,
  };
  return shallow(component, { context });
};

const mountWithStore = (component, store) => {
  const context = {
    store,
  };
  return mount(component, { context });
};

describe('History', () => {
  it('exists', () => {
    const testState = {
      showBox: {},
    };
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<History />, store);
    expect(wrapper.find('h1').exists()).to.eql(true);
  });
});
