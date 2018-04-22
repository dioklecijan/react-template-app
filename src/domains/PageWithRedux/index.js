import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux';

class PageWithRedux extends Component {
  // event handlers
  onIncrement = () => this.props.increment();
  onDecrement = () => this.props.decrement();

  // rendering
  render() {
    console.log(this.props.state);
    return (
      <div>
        <h2>PageWithRedux</h2>
        <p>
          Demonstrates simple reducer that is dynamically added to the store.
        </p>
        <hr />
        <pre>state.PageWithRedux.counter: {this.props.counter}</pre>
        <button onClick={this.onIncrement}>INCREMENT</button>
        <button onClick={this.onDecrement}>DECREMENT</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

const mapStateToProps = state => ({
  counter: state.PageWithRedux.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWithRedux);
