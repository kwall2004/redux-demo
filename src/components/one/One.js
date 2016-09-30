import React from 'react';
import { Link } from 'react-router';
import styles from './one.less';

const One = React.createClass({
  render() {
    return (
      <div className="one">
        <h1>
          Component 1
        </h1>
        <button
          onClick={() => this.props.increment('One')}>
          +
        </button>
        <span>
          {this.props.counters.find(function(counter) {
            return counter.get('name') == 'One';
          }).get('value')}
        </span>
        <nav>
          <ul>
            <li>
              <Link to="/one/a">Component 1a</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            counters: this.props.counters,
            increment: this.props.increment
          })}
        </main>
      </div>
    )
  }
});

module.exports = One;
