import React from 'react'; // eslint-disable-line no-unused-vars
import 'jest-styled-components';
import { shallow } from 'enzyme';

import Header from '../../../components/Header/Header';

describe('Header', () => {
  it('should have correct background color', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveStyleRule('background-color', 'rgba(0,0,0,.8)'); // eslint-disable-line no-undef
    wrapper.setProps({ transparent: true });
    expect(wrapper).toHaveStyleRule('background-color', 'transparent'); // eslint-disable-line no-undef
  });
});
