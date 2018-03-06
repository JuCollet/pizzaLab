import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { createMockStore } from 'redux-test-utils';

import mockStore from '../../../mockStore';
import ToppingItem from '../../../../components/ToppingList/ToppingItem/ToppingItem';

describe('ToppingItem', () => {
  const store = createMockStore(mockStore);
  const wrapper = shallow(<ToppingItem
    key="azy352"
    name="ananas"
    description="description test"
    price={0.15}
    amount={0}
    max={3}
  />, { context: { store } });
  it('Should hide the description when isDescriptionHidden state is true', () => {
    const component = wrapper.dive().dive().dive();
    expect(component.find('ToppingItem__StyledDescriptionWrapper')).toHaveStyleRule('height', '0px'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__StyledDescriptionWrapper')).toHaveStyleRule('padding-bottom', '0px'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__Description')).toHaveStyleRule('opacity', '0'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__StyledIngredientWrapper')).toHaveStyleRule('border-radius', '4px'); // eslint-disable-line no-undef
    component.setState({ isDescriptionHidden: false });
    expect(component.find('ToppingItem__StyledDescriptionWrapper')).toHaveStyleRule('height', 'initial'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__StyledDescriptionWrapper')).toHaveStyleRule('padding-bottom', '12px'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__Description')).toHaveStyleRule('opacity', '1'); // eslint-disable-line no-undef
    expect(component.find('ToppingItem__StyledIngredientWrapper')).toHaveStyleRule('border-radius', '4px 4px 0px 0px'); // eslint-disable-line no-undef
  });

  describe('Toggle description button', () => {
    it('Should update toggle isDescriptionHidden on click', () => {
      const component = wrapper.dive().dive().dive();
      expect(component.state('isDescriptionHidden')).toBe(true); // eslint-disable-line no-undef
      component.find('ToppingItem__Ingredient').simulate('click');
      expect(component.state('isDescriptionHidden')).toBe(false); // eslint-disable-line no-undef
    });
  });
});
