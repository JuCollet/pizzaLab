import React from 'react'; // eslint-disable-line no-unused-vars
import 'jest-styled-components';
import { shallow } from 'enzyme';

import ButtonIncDec from '../../../../components/Counter/ButtonIncDec/ButtonIncDec';

const shallowWithoutStore = (customProps) => { // eslint-disable-line no-unused-vars
  const props = Object.assign({
    name: 'test',
    ...customProps,
  });

  const functionMock = jest.fn(); // eslint-disable-line no-undef
  const wrapper = shallow(<ButtonIncDec {...props} clickHandler={functionMock} />);

  return {
    functionMock,
    wrapper,
  };
};

describe('ButtonIncDec', () => {
  it('Should not trigger click handler if disabled', () => {
    const { wrapper, functionMock } = shallowWithoutStore({ disabled: true });
    wrapper.simulate('click');
    expect(functionMock).toHaveBeenCalledTimes(0); // eslint-disable-line no-undef
  });
  it('Should trigger click handler on click if not disabled', () => {
    const { wrapper, functionMock } = shallowWithoutStore({ disabled: false });
    wrapper.simulate('click');
    expect(functionMock).toHaveBeenCalledTimes(1); // eslint-disable-line no-undef
  });
});
