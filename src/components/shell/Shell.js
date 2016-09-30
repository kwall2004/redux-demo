import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import styles from './shell.css';

const Shell = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/one">Component 1</Link>
            </li>
            <li>
              <Link to="/two">Component 2</Link>
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
    );
  }
});

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shell);

module.exports = Container;
