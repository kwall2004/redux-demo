import React from 'react';
import styles from './one-a.less';

const OneA = React.createClass({
    render() {
        return (
            <div className="one-a">
                <h1>
                    Component 1A
                </h1>
                <button
                    onClick={() => this.props.increment(1)}>
                    +
                </button>
                <span>
                    {this.props.counters.getIn([1, 'value'])}
                </span>
            </div>
        )
    }
});

module.exports = OneA;