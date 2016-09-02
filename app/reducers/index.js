import {SUBMIT, LOGIN} from '../constants';

const initialState = {
  furthest: 1,
  isLoggedIn: false,
  config: {}
};

const actionHandlers = {
  [SUBMIT]: (state, action) => Object.assign({}, state, {
    furthest: action.step
  }),
  [LOGIN]: (state, action) => Object.assign({}, state, {
    isLoggedIn: action.isLoggedIn,
    config: action.config,
  })
};

function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    if (!reduceFn) {
      return state;
    } else {
      return { 
        ...state,
        ...reduceFn(state, action) 
      };
    }
  };
}

export default createReducer(initialState, actionHandlers);
