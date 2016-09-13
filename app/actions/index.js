import { api } from '../api.js';
import { SUBMIT, UPDATE, SIGNUP, LOGIN } from '../constants.js';

export function signup(config, redirect) {
  return (dispatch, getState) => {
    api(config).signup().then((res) => {
      if (res.success) {
        config.token = res.token;
        dispatch({
          type: SIGNUP,
          config: config
        });
        update(redirect)(dispatch, getState);
      }
    });
  };
};

export function login(config, redirect) {
  return (dispatch, getState) => {
    api(config).login().then((res) => {
      if (res.success) {
        config.token = res.token;
        dispatch({
          type: LOGIN,
          config: config
        });
        update(redirect)(dispatch, getState);
      }
    });
  };
};

export function update(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api(config).step.get().then((res) => {
      if (res.success) {
        dispatch({
          type: UPDATE,
          furthest: res.step
        });
      }
      if (redirect) redirect();
    });
  };
};

export function submit(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api(config).step.post().then(res => {
      if (res.success) {
        dispatch({
          type: SUBMIT,
          furthest: res.step
        });
      }
      if (redirect) redirect();
    });
  };
};
