import { combineReducers } from 'redux';

import counters from './counters';

const reducer = combineReducers({
  counters
});

export default reducer;
