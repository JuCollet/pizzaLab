import React from 'react'; // eslint-disable-line no-unused-vars
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';

import Collection from '../../pages/collection';

const shallowWithoutStore = (customProps) => { // eslint-disable-line no-unused-vars
  const props = Object.assign({
    ...customProps,
  });

  const functionMock = sinon.spy();
  const wrapper = shallow(<Collection {...props} functionToMock={functionMock} />);

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
  const wrapper = mount(<Collection {...props} functionToMock={functionMock} />);

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

describe('Collection', () => {
  it('exists', () => {
    const testState = {
      showBox: {},
    };
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Collection />, store);
    expect(wrapper.exists()).to.eql(true);
  });
});
