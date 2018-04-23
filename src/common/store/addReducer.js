import { combineReducers } from 'redux';

/**
 * Redux helper to dynamically add new reducer.
 * You need this only if you don't want to load all reducers at once and
 * split code.
 *
 * @example
 * store = configureStore();
 *
 * function reducer(state = {counter: 0}, action) {
 *   switch (action.type) {
 *     case 'INCREMENT':
 *       return { counter: state.counter + 1 };
 *
 *     case 'DECREMENT':
 *       return { counter: state.counter - 1 };
 *
 *     default:
 *       return state;
 *   }
 * }
 *
 * addReducer(store, {abc: reducer})
 * console.log(JSON.stringify(store.getState())) // { abc: {counter: 0} }
 *
 * store.dispatch('INCREMENT')  // { abc: {counter: 1} }
 *
 * addReducer(store, {demo: anotherReducer})
 * console.log(JSON.stringify(store.getState())) // { abc: {counter: 1}, demo: {...} }
 *
 */

// @@REPLACE action type is not dispatched after replaceReducer call, so we do
// that manually
const ActionTypes = {
  ADD_REDUCER:
    '@@ADD_REDUCER_' +
    Math.random()
      .toString(36)
      .substring(7)
      .split('')
      .join('.'),
};

/**
 * Redux helper for dynamically adding new reducer.
 * You can pass an reducer or key,value object where value must be a
 * reducer:
 *  addReducer(store, reducerFn)
 *  addReducer(store, {demo: reducerFn});
 *
 * to initialize new reducer state.
 * @param {any} store
 * @param {function|object} reducer (like {demo: reducerFunction})
 */
export default function addReducer(store, reducer) {
  if (typeof reducer === 'function')
    store.reducers = {
      ...store.reducers,
      reducer,
    };
  else
    store.reducers = {
      ...store.reducers,
      ...reducer,
    };

  store.replaceReducer(combineReducers(store.reducers));
  store.dispatch({ type: ActionTypes.ADD_REDUCER });
}
