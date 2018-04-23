import { store } from '../../../config';
import { addReducer } from '../../../common/store';

// Action types
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ActionTypes = {
  ENLARGE: 'ENLARGE',
  REDUCE: 'REDUCE',
};

const initialState = {
  size: 0,
};

// Reducer
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ENLARGE:
      return { size: state.size + 1 };

    case ActionTypes.REDUCE:
      return { size: state.size - 1 };

    default:
      return state;
  }
}

// add reducer to the application store.
addReducer(store, { Size: reducer });

// Action creators
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function enlarge() {
  return {
    type: ActionTypes.ENLARGE,
  };
}

export function reduce() {
  return {
    type: ActionTypes.REDUCE,
  };
}
