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
    // these are  custom props sent to Page component
    myCustomProp: 123,
    title: 'Page',
  },
  {
    loader: () => import('./domains/PageWithRedux'),
    path: '/pagewithredux',
    title: 'Page with redux',
  },
  {
    loader: () => import('./domains/PageWithSubroutes'),
    path: '/pagewithsubroutes',
    title: 'Page with subroutes',
  },
  {
    loader: () => import('./domains/PageWithReduxAndSubroutes'),
    path: '/pagewithreduxandsubroutes',
    title: 'Page with redux and subroutes',
  },
]);

export { store, routes };
