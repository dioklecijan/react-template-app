// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux';

type P = {
  // redux actions
  increment: () => mixed,
  decrement: () => mixed,
  // redux state
  counter: number,
  // props via route
  title: string,
};

class PageWithRedux extends React.Component<P, {}> {
  // event handlers
  onIncrement = () => this.props.increment();
  onDecrement = () => this.props.decrement();

  // rendering
  render() {
    return (
      <div>
        <h2>PageWithRedux</h2>
        <p>
          Demonstrates simple reducer that is dynamically added to the store.
        </p>
        <pre>this.props.title: {this.props.title}</pre>
        <pre>this.props.counter: {this.props.counter}</pre>
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
