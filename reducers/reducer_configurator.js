import _ from 'lodash';
import { SELECTION_DELETE, SELECTION_UPDATE, TOPPINGS_FETCH } from '../actiontypes/';

const initialState = {
  toppings: {},
  selection: { price: 9 },
};

export default function (state = initialState, action) {
  function updateSelectionAmount() {
    if (state.selection[action.payload.name]) {
      if (action.payload.increment) {
        return state.selection[action.payload.name].amount + 1;
      }
      return state.selection[action.payload.name].amount - 1;
    }
    return 1;
  }
  function updateSelectionPrice() { 
    if (!state.toppings[action.payload.name]) return state.selection.price;
    if (action.payload.increment) {
      return state.selection.price + state.toppings[action.payload.name].fields.price;
    }
    return state.selection.price - state.toppings[action.payload.name].fields.price;
  }

  switch (action.type) {
    case SELECTION_DELETE:
      return {
        ...state,
        selection: { price: 9 },
      };
    case SELECTION_UPDATE:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.payload.name]: {
            amount: updateSelectionAmount(),
          },
          price: updateSelectionPrice(),
        },
      };
    case TOPPINGS_FETCH:
      return { ...state, toppings: _.mapKeys(action.payload.items, 'fields.name') };
    default:
      return state;
  }
}
