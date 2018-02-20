import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { expect } from 'chai';

import Logo from '../../../components/Header/Logo/Logo';

const mountWithoutStore = (customProps) => {
  const props = Object.assign({
    ...customProps,
  });

  const wrapper = mount(<Logo {...props} />);

  return {
    wrapper,
  };
};

describe('Logo', () => {
  it('should exists', () => {
    const { wrapper } = mountWithoutStore();
    expect(wrapper.exists()).to.eql(true);
  });
});
