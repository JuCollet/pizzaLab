import React from 'react'; // eslint-disable-line no-unused-vars
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from '../../components/Header/Header';

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
  it('should have "nav-small" class when pageYOffset is > 10', () => {
    const { wrapper } = mountWithoutStore();
    expect(window.pageYOffset).to.equal(0);
    expect(wrapper.find('nav').hasClass('nav-small')).to.eql(false);
    global.window = { ...global.window, pageYOffset: 31 };
    wrapper.instance().onScrollHandler();
    wrapper.update();
    expect(window.pageYOffset).to.equal(31);
    expect(wrapper.find('nav').hasClass('nav-small')).to.eql(true);
  });

  it('should not have "nav-small" class is pageYOffset is < 10', () => {
    const { wrapper } = mountWithoutStore();
    global.window = { ...global.window, pageYOffset: 31 };
    wrapper.instance().onScrollHandler();
    wrapper.update();
    expect(window.pageYOffset).to.equal(31);
    expect(wrapper.find('nav').hasClass('nav-small')).to.eql(true);
    global.window = { ...global.window, pageYOffset: 8 };
    wrapper.instance().onScrollHandler();
    wrapper.update();
    expect(window.pageYOffset).to.equal(8);
    expect(wrapper.find('nav').hasClass('nav-small')).to.eql(false);
  });

  it('should remove the window scroll event listener on unmount', () => {
    const { wrapper } = mountWithoutStore();
    const removeEventListenerSpy = sinon.spy(window, 'removeEventListener');
    wrapper.unmount();
    expect(removeEventListenerSpy.calledOnce).to.eql(true);
  });
});
