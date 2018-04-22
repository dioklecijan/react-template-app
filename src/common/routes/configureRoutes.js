import React from 'react';
import Loadable from 'react-loadable';

/**
 * Helper for dynamically creating application routes.
 * Route components modules will be split and loaded as requested using
 * dynamic import.
 *
 * `config` parameter is an array of objects where each object contain
 *  - route props as described in react-router 4 (`path`, `exact` etc.) except the
 * `component` prop
 *  - `loader` prop, which is the function that returns dynamic import of route component
 *  - Optional `loading` component (visual component that will be displayed
 *    if loading lasts over 200ms). If loading is not passed, text `Loading...`
 *    will be displayed in such a situation.
 *  - any other custom param you want to pass down to the component
 *
 * @example
 * const config = [
 *  {
 *    loader: () => import ('./HomeComponent'),
 *    loading: (() => <div>Loading..</div>),
 *    path: 'home',
 *    exact: true
 *  },
 *  {
 *    loader: () => import ('./AboutComponent')
 *    path: 'about',
 *    Loading: SomeFancyLoadingWheel,
 *    custom: 'this is a custom prop passed to the AboutComponent'
 *  }
 * ];
 * let routes = configureRoutes(config)
 *
 * // in application render
 * routes.map(route => <Route {...route})
 *
 * @param {array} config route configuration
 * @return{array} Array of loadable route
 */
const configureRoutes = config => config.map(item => _configureRoute(item));

const Loading = () => <div>Loading...</div>;

function _configureRoute(configItem) {
  const { loader, loading, ...rest } = configItem;
  let component = Loadable({
    loader: loader,
    loading: loading || Loading,
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props} />;
    },
  });
  return { component, ...rest };
}

export default configureRoutes;
