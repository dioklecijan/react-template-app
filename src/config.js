import thunk from 'redux-thunk';
import { configureStore } from './common/store';
import { configureRoutes } from './common/routes';

// application store

const store = configureStore([thunk]);

// application top level routes

const routes = configureRoutes([
  {
    loader: () => import('./domains/Page'),
    exact: true,
    path: '/page',
    myCustomProp: 123,
  },
  {
    loader: () => import('./domains/PageWithRedux'),
    path: '/pagewithredux',
  },
  {
    loader: () => import('./domains/PageWithSubroutes'),
    path: '/pagewithsubroutes',
  },
  {
    loader: () => import('./domains/PageWithReduxAndSubroutes'),
    path: '/pagewithreduxandsubroutes',
  },
]);

export { store, routes };
