import { createStore } from 'redux';
import { fromJS } from 'immutable';

import reducer from './reducers/index';

const defaultState = {
    counters: fromJS([
        {
            value: 0
        },
        {
            value: 0
        },
        {
            value: 0
        }
    ])
};

const store = createStore(reducer, defaultState);

export default store;