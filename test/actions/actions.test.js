import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { toppingsFetch } from '../../actions/configurator';

const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
  describe('Configurator', () => {
    describe('Fetchdata', () => {
      it('Should create the expected actions', async () => {
        const store = mockStore();
        await store.dispatch(toppingsFetch());
        const actions = store.getActions();
        expect(actions[0]).to.eql({ type: 'is_fetching', payload: true });
        expect(actions[1]).to.include({ type: 'toppings_fetch' });
        expect(actions[2]).to.eql({ type: 'is_fetching', payload: false });
      });
    });
  });
});
