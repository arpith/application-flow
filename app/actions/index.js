import { SUBMIT, UPDATE, SIGNUP, LOGIN } from '../constants.js';

function api(config) {
  const auth = "Basic " + new Buffer(config.username + ":" + config.password).toString("base64");
  const call = (endpoint, method) => {
    const url = '/api' + endpoint;
    const params = {
      method: method,
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json'
      }
    };
    if (method === 'POST') params.body = JSON.stringify(config);
    return fetch(url, params).then(res => res.json());
  };
  return {
    signup: () => call('/signup', 'POST'),
    login: () => call('/login', 'POST'),
    step: {
      post: () => call('/step', 'POST'),
      get: () => call('/step', 'GET')
    }
  };
}

export function signup(config, redirect) {
  return (dispatch, getState) => {
    api(config).signup().then(res => {
      if (res.success) {
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
    api(config).login().then(res => {
      if (res.success) {
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
    api(config).step.get().then(res => {
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
