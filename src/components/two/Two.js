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
          onClick={() => this.props.increment('Two')}>
          +
        </button>
        <span>
          {this.props.counters.find(function(counter) {
            return counter.get('name') == 'Two';
          }).get('value')}
        </span>
      </div>
    )
  }
});

module.exports = Two;
