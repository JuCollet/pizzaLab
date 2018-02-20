import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from '../../../components/Header/Header';

const mountWithoutStore = (customProps) => {
  const props = Object.assign({
    ...customProps,
  });

  const wrapper = mount(<Header {...props} />);

  return {
    wrapper,
  };
};

describe('Header', () => {
  it('should exists', () => {
    const { wrapper } = mountWithoutStore();
    expect(wrapper.exists()).to.eql(true);
  });
});
