import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Creates empty store with enabled redux dev tools in dev  mode
 * (chrome extension/firefox add-on).
 * @example
 * let store = configureStore() // creating store without middleware
 *
 * let store = configureStore([a, b, c]) // creates store with a, b and c middleware
 *
 * @param {array} middleware - array of middleware
 * @returns store
 */
export default function configureStore(middleware) {
  let composeEnhancers;
  if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose;
  } else {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  let store = null;
  const rootReducer = () => ({});
  if (middleware) {
    store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(...middleware))
    );
  } else {
    store = createStore(rootReducer);
  }
  store.reducers = [];
  return store;
}
