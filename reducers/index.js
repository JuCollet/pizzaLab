import { combineReducers } from 'redux';
import configuratorReducer from './reducer_configurator';
import fetchingReducer from './reducer_fetching';

const rootReducer = combineReducers({
  configurator: configuratorReducer,
  fetching: fetchingReducer,
});

export default rootReducer;
