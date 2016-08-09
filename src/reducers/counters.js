import { fromJS, List } from 'immutable';

function counters(state = List(), action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.map(function(counter) {
                return fromJS({
                    name: counter.get('name'),
                    value: counter.get('name') == action.name ? counter.get('value') + 1 : counter.get('value')
                });
            });
        default:
            return state;
    }
}

export default counters;