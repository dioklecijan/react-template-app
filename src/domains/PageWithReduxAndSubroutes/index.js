// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { configureRoutes } from '../../common/routes';
import { TopMenu } from '../../common/components';
import { changeColor } from './redux';

type P = {
  title: string,
  color: string,
  changeColor: (color: string) => mixed,
};

// helper array for buttons
const colors = ['green', 'blue', 'yellow', 'red'];

class PageWithReduxAndSubroutes extends React.Component<P, {}> {
  routes: Array<{}>;
  config: Array<{}>;

  constructor(props) {
    super(props);
    // Configuration for subroutes routes
    // Color component receives callback
    this.config = [
      {
        loader: () => import('./Color'),
        path: '/pagewithreduxandsubroutes/orange',
        title: 'Orange',
        color: 'orange',
        onClick: this.onClick,
      },
      {
        loader: () => import('./Color'),
        path: '/pagewithreduxandsubroutes/red',
        title: 'Red',
        color: 'red',
        onClick: this.onClick,
      },
      {
        loader: () => import('./Size'),
        path: '/pagewithreduxandsubroutes/size',
        title: 'Size',
      },
    ];

    this.routes = configureRoutes(this.config);
  }

  onClick = color => this.props.changeColor(color);

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Dynamically added subroutes and reducer.</p>
        <pre>state.PageWithReduxAndSubroutes.color: {this.props.color}</pre>
        <p>Click bellow to load subroute bellow:</p>
        <TopMenu routes={this.routes} />

        {colors.map(color => (
          <button key={color} onClick={() => this.onClick(color)}>
            {color}
          </button>
        ))}
        <hr />
        <div>{this.routes.map((r, i) => <Route key={`r_${i}`} {...r} />)}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
});

const mapStateToProps = state => ({
  color: state.PageWithReduxAndSubroutes.color,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PageWithReduxAndSubroutes
);
