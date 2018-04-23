// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { enlarge, reduce } from './redux';

type P = {
  // redux actions
  enlarge: () => mixed,
  reduce: () => mixed,
  // redux state
  size: number,
  // props via route
  title: string,
};

class Size extends React.Component<P, {}> {
  // event handlers
  // event handlers
  onEnlarge = () => this.props.enlarge();
  onReduce = () => this.props.reduce();

  // rendering
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>This dynamically loaded subroute creates new reducer.</p>
        <pre>state.Size.size: {this.props.size}</pre>
        <button onClick={this.onEnlarge}>ENLARGE</button>
        <button onClick={this.onReduce}>REDUCE</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  enlarge: () => dispatch(enlarge()),
  reduce: () => dispatch(reduce()),
});

const mapStateToProps = state => ({
  size: state.Size.size,
});

export default connect(mapStateToProps, mapDispatchToProps)(Size);
