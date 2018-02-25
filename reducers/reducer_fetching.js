import { IS_FETCHING } from '../actiontypes';

export default function (state = {}, action) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}
