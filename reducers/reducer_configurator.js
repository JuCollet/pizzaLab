import { TOPPINGS_FETCH } from '../actiontypes/';

export default function (state = { toppings: [] }, action) {
  switch (action.type) {
    case TOPPINGS_FETCH:
      return { ...state, toppings: action.payload.items };
    default:
      return state;
  }
}
