import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { deleteSelection, toppingsFetch, updateSelection } from '../../actions/configurator';
import { IS_FETCHING, SELECTION_DELETE, SELECTION_UPDATE, TOPPINGS_FETCH } from '../../actiontypes/';


const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
  describe('Configurator', () => {

    describe('Fetchdata', () => {
      it('Should create the expected actions', async () => {
        const store = mockStore();
        await store.dispatch(toppingsFetch());
        const actions = store.getActions();
        expect(actions[0]).to.eql({ type: IS_FETCHING, payload: true });
        expect(actions[1]).to.include({ type: TOPPINGS_FETCH });
        expect(actions[2]).to.eql({ type: IS_FETCHING, payload: false });
      });
    });

    describe('DeleteSelection', () => {
      it('Should create the expected action', () => {
        const store = mockStore();
        store.dispatch(deleteSelection());
        const actions = store.getActions();
        expect(actions[0]).to.eql({ type: SELECTION_DELETE });
      });
    });

    describe('UpdateSelection', () => {
      it('Should create the expected action', () => {
        const store = mockStore();
        store.dispatch(updateSelection('test a', true));
        store.dispatch(updateSelection('test b', false));
        const actions = store.getActions();
        expect(actions[0]).to.eql({ type: SELECTION_UPDATE, payload: { name: 'test a', increment: true } });
        expect(actions[1]).to.eql({ type: SELECTION_UPDATE, payload: { name: 'test b', increment: false } });
      });
    });
  });
});
