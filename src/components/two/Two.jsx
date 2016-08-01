import React from 'react';
import styles from './two.less';

const Two = React.createClass({
    render() {
        return (
            <div className="two">
                <h1>
                    Component 2
                </h1>
                <button
                    onClick={() => this.props.increment(2)}>
                    +
                </button>
                <span>
                    {this.props.counters.getIn([2, 'value'])}
                </span>
            </div>
        )
    }
});

module.exports = Two;