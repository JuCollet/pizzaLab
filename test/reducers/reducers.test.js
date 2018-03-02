import { expect } from 'chai';
import { IS_FETCHING, SELECTION_UPDATE, TOPPINGS_FETCH } from '../../actiontypes/';
import configuratorReducer from '../../reducers/reducer_configurator';
import fetchingReducer from '../../reducers/reducer_fetching';

describe('Reducers', () => {
  const initialState = {
    toppings: {},
    selection: { price: 9 },
  };
  describe('Configurator reducer', () => {
    it('Should return empty state if no state provided', () => {
      const newState = configuratorReducer(undefined, { type: 'ijijqj' });
      expect(newState).to.eql(initialState);
    });
    it('Should return untouched state if action doesnt match', () => {
      const newState = configuratorReducer(initialState, { type: 'ijijqj' });
      expect(newState).to.eql(initialState);
    });
    it('Should return fresh toppings when data fetched', () => {
      const existingState = { toppings: { ananas: { name: 'name 1' }, anchoix: { name: 'name 2' } } };
      const newData = { items: [{ fields: { name: 'name a' } }, { fields: { name: 'name b' } }] };
      const newAction = { type: TOPPINGS_FETCH, payload: newData };
      const newState = configuratorReducer(existingState, newAction);
      expect(newState.toppings).to.include.all.keys('name a', 'name b');
    });
    describe('updateSelectionPrice', () => {
      it('Should not throw an error if topping doesnt exists anymore', () => {
        // If reducer try to get the price of an unknow topping in state.toppings, return current price;
        const newAction = { type: SELECTION_UPDATE, payload: { name: 'ananas' } };
        const newState = configuratorReducer(initialState, newAction);
        expect(newState.selection.price).to.eql(9);
      });
    });
  });
  describe('Fetching reducer', () => {
    it('Should return the correct updated state', () => {
      const newActionTrue = { type: IS_FETCHING, payload: true };
      const newActionFalse = { type: IS_FETCHING, payload: false };
      const newStateTrue = fetchingReducer(undefined, newActionTrue);
      const newStateFalse = fetchingReducer({ isFetching: true }, newActionFalse);
      expect(newStateTrue.isFetching).to.eql(true);
      expect(newStateFalse.isFetching).to.eql(false);
    });
    it('Should return empty state if no state provided', () => {
      const newState = fetchingReducer(undefined, { type: 'ijijqj' });
      expect(newState).to.eql({});
    });
    it('Should return untouched state if action doesnt match', () => {
      const newState = fetchingReducer(initialState, { type: 'ijijqj' });
      expect(newState).to.eql(initialState);
    });
  });
});
