import { store } from '../../config';
import { addReducer } from '../../common/store';

// Action types
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const initialState = {
  counter: 0,
};

// Reducer
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { counter: state.counter + 1 };

    case ActionTypes.DECREMENT:
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

// add reducer to the application store.
addReducer(store, { PageWithRedux: reducer });

// Action creators
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
  };
}
