import React from 'react'; // eslint-disable-line no-unused-vars
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';

import Shop from '../../pages/shop';

const shallowWithoutStore = (customProps) => { // eslint-disable-line no-unused-vars
  const props = Object.assign({
    ...customProps,
  });

  const functionMock = sinon.spy();
  const wrapper = shallow(<Shop {...props} functionToMock={functionMock} />);

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
  const wrapper = mount(<Shop {...props} functionToMock={functionMock} />);

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

describe('Shop', () => {
  it('exists', () => {
    const testState = {
      showBox: {},
    };
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Shop />, store);
    expect(wrapper.exists()).to.eql(true);
  });
});
