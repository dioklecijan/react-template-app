import { store } from '../../config';
import { addReducer } from '../../common/store';

// Action types
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ActionTypes = {
  CHANGE_COLOR: 'CHANGE_COLOR',
};

const initialState = {
  color: 'blue',
};

// Reducer
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

// add reducer to the application store.
addReducer(store, { PageWithReduxAndSubroutes: reducer });

// Action creators
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function changeColor(color: string) {
  return {
    type: ActionTypes.CHANGE_COLOR,
    payload: { color },
  };
}
