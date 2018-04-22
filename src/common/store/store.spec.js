import configureStore from './configureStore';
import addReducer from './addReducer';

const initState = {
  counter: 0,
};

function r1(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };

    case 'DECREMENT':
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

function r2(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };

    case 'DECREMENT':
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

function r3(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };

    case 'DECREMENT':
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

test('addReducer', () => {
  let store = configureStore();
  const initStateStr = JSON.stringify(store.getState());
  expect(initStateStr).toEqual('{}');

  addReducer(store, { r1 });
  expect(store.getState().r1.counter).toBe(0);

  store.dispatch({ type: 'INCREMENT' });
  expect(store.getState().r1.counter).toBe(1);

  store.dispatch({ type: 'INCREMENT' });
  expect(store.getState().r1.counter).toBe(2);

  store.dispatch({ type: 'DECREMENT' });
  expect(store.getState().r1.counter).toBe(1);

  store.dispatch({ type: 'UNKNOWN' });
  expect(store.getState().r1.counter).toBe(1);

  store.dispatch({ type: 'INCREMENT' });

  addReducer(store, { r2 });
  expect(store.getState().r1.counter).toBe(2);
  expect(store.getState().r2.counter).toBe(0);

  addReducer(store, { r3 });
  expect(store.getState().r2.counter).toBe(0);

  store.dispatch({ type: 'INCREMENT' });
  expect(store.getState().r1.counter).toBe(3);
  expect(store.getState().r2.counter).toBe(1);
  expect(store.getState().r3.counter).toBe(1);
});
