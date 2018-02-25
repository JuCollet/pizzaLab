import { expect } from 'chai';
import { IS_FETCHING, TOPPINGS_FETCH } from '../../actiontypes/';
import configuratorReducer from '../../reducers/reducer_configurator';
import fetchingReducer from '../../reducers/reducer_fetching';

describe('Reducers', () => {
  const initialState = { initial: 'initialState' };
  describe('Configurator reducer', () => {
    it('Should return empty state if no state provided', () => {
      const newState = configuratorReducer(undefined, { type: 'ijijqj' });
      expect(newState).to.eql({ toppings: [] });
    });
    it('Should return untouched state if action doesnt match', () => {
      const newState = configuratorReducer(initialState, { type: 'ijijqj' });
      expect(newState).to.eql(initialState);
    });
    it('Should return fresh toppings when data fetched', () => {
      const existingState = { toppings: [{ name: 'name 1' }, { name: 'name 2' }] };
      const newData = { items: [{ name: 'name a' }, { name: 'name b' }] };
      const newAction = { type: TOPPINGS_FETCH, payload: newData };
      const newState = configuratorReducer(existingState, newAction);
      expect(newState).to.eql({ toppings: newData.items });
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
