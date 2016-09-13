require('es6-promise').polyfill();
require('isomorphic-fetch');

export function api(config) {
  let password = config.password
  if (config.token) password = config.token;
  const auth = "Basic " + new Buffer(config.username + ":" + password).toString("base64");

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
