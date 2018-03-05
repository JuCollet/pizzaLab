import { expect } from 'chai';
import { IS_FETCHING, SELECTION_DELETE, SELECTION_UPDATE, TOPPINGS_FETCH } from '../../actiontypes/';
import configuratorReducer from '../../reducers/reducer_configurator';
import fetchingReducer from '../../reducers/reducer_fetching';

describe('Reducers', () => {
  const initialState = {
    toppings: {},
    selection: { price: 9, anchoix: { amount: 2 } },
  };

  describe('Configurator reducer', () => {
    it('Should return empty state if no state provided', () => {
      const emptyState = { toppings: {}, selection: { price: 9 } };
      const newState = configuratorReducer(undefined, { type: 'ijijqj' });
      expect(newState).to.eql(emptyState);
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

    it('Should return an empty selection state on deleteSelection action call', () => {
      const existingState = { toppings: { ananas: { name: 'name 1' }, anchoix: { name: 'name 2', fields: { price: 0.5 } } }, selection: { price: 9.5, anchoix: { amount: 1 } } };
      const expectedState = { toppings: { ananas: { name: 'name 1' }, anchoix: { name: 'name 2', fields: { price: 0.5 } } }, selection: { price: 9 } };
      const action = { type: SELECTION_DELETE };
      const newState = configuratorReducer(existingState, action);
      expect(newState).to.eql(expectedState);
    });

    describe('updateSelectionPrice', () => {
      it('Should not throw an error if topping doesnt exists anymore', () => {
        // If reducer try to get the price of an unknow topping
        // in state.toppings, return current price;
        const newAction = { type: SELECTION_UPDATE, payload: { name: 'ananas' } };
        const newState = configuratorReducer(initialState, newAction);
        expect(newState.selection.price).to.eql(9);
      });

      it('Should update the price correctly', () => {
        const existingState = { toppings: { ananas: { name: 'name 1' }, anchoix: { name: 'name 2', fields: { price: 0.5 } } }, selection: { price: 9, anchoix: { amount: 1 } } };
        const newAction = { type: SELECTION_UPDATE, payload: { name: 'anchoix', increment: true } };
        const newAction2 = { type: SELECTION_UPDATE, payload: { name: 'anchoix', increment: false } };
        const newState = configuratorReducer(existingState, newAction);
        const newState2 = configuratorReducer(existingState, newAction2);
        expect(newState.selection.price).to.eql(9.5);
        expect(newState2.selection.price).to.eql(8.5);
      });
    });

    describe('updateSelectionAmount', () => {
      it('Should increment the amount if action.payload.increment is true', () => {
        const newAction = { type: SELECTION_UPDATE, payload: { name: 'anchoix', increment: true } };
        const newState = configuratorReducer(initialState, newAction);
        expect(newState.selection.anchoix.amount).to.eql(3);
      });

      it('Should decrement the amount if action.payload.increment is false or undefined', () => {
        const newAction = { type: SELECTION_UPDATE, payload: { name: 'anchoix', increment: false } };
        const newAction2 = { type: SELECTION_UPDATE, payload: { name: 'anchoix' } };
        const newState = configuratorReducer(initialState, newAction);
        const newState2 = configuratorReducer(initialState, newAction2);
        expect(newState.selection.anchoix.amount).to.eql(1);
        expect(newState2.selection.anchoix.amount).to.eql(1);
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
