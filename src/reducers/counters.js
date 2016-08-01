import { List } from 'immutable';

function counters(state = List(), action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.setIn([action.index, 'value'], state.getIn([action.index, 'value']) + 1);
        default:
            return state;
    }
}

export default counters;