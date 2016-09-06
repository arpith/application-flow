import {SUBMIT, LOGIN, SIGNUP} from '../constants';

const initialState = {
  furthest: 1,
  config: {}
};

export function furthest(state, action) {
  switch(action.type) {
    case SUBMIT:
      return action.step;
    default:
      if (!state) return initialState.furthest;
      else return state;
  }
}

export function config(state, action) {
  switch(action.type) {
    case SIGNUP:
      return action.config;
    case LOGIN:
      return action.config;
    default:
      if (!state) return initialState.config;
      else return state;
  }
}
