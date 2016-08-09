import { createStore } from 'redux';
import { fromJS } from 'immutable';

import reducer from './reducers/index';

const defaultState = {
    counters: fromJS([
        {
            name: 'One',
            value: 0
        },
        {
            name: 'Two',
            value: 0
        },
        {
            name: 'OneA',
            value: 0
        }
    ])
};

const store = createStore(reducer, defaultState);

export default store;