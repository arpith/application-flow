import {SUBMIT, LOGIN} from '../constants.js';

function api(endpoint, config) {
  const url = '/api/' + endpoint;
  const auth = "Basic " + new Buffer(config.username + ":" + config.password).toString("base64");
  return fetch(url, {
    method: POST,
    body: '',
    headers: {
      'Authorization': auth
    }
  }).then(res => res.json());
}

export function login(config, redirect) {
  return dispatch => {
    api('/login', config).then(res => {
      if (res.success) {
        dispatch({
          type: LOGIN,
          isLoggedIn: true,
          config: config
        });
      }
      if (redirect) redirect();
    });
  };
};

export function submit(redirect) {
  return (dispatch, getState) => {
    const config = getState().config;
    api('/step', config).then(res => {
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
