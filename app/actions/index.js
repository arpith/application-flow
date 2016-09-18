import api from '../api.js';
import { SUBMIT, UPDATE, SIGNUP, LOGIN, LOGOUT } from '../constants.js';

export function update(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api(config).step.get().then((res) => {
      if (res.success) {
        dispatch({
          type: UPDATE,
          furthest: res.step,
        });
      }
      if (redirect) redirect();
    });
  };
}

export function signup(initialConfig, redirect) {
  const config = initialConfig;
  return (dispatch, getState) => {
    api(config).signup().then((res) => {
      if (res.success) {
        config.token = res.token;
        dispatch({
          type: SIGNUP,
          config,
        });
        update(redirect)(dispatch, getState);
      }
    });
  };
}

export function login(initialConfig, redirect) {
  const config = initialConfig;
  return (dispatch, getState) => {
    api(config).token.create().then((res) => {
      if (res.success) {
        config.token = res.token;
        dispatch({
          type: LOGIN,
          config,
        });
        update(redirect)(dispatch, getState);
      }
    });
  };
}

export function logout(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api(config).token.del().then((res) => {
      if (res.success) {
        delete config.token;
        dispatch({
          type: LOGOUT,
          config,
        });
        if (redirect) redirect();
      }
    });
  };
}

export function submit(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api(config).step.post().then((res) => {
      if (res.success) {
        dispatch({
          type: SUBMIT,
          furthest: res.step,
        });
      }
      if (redirect) redirect();
    });
  };
}
