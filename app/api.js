require('es6-promise').polyfill();
require('isomorphic-fetch');

export default (config) => {
  let password = config.password;
  if (config.token) password = config.token;
  const auth = new Buffer(`${config.username}:${password}`).toString('base64');
  const authHeader = `Basic ${auth}`;

  const call = (endpoint, method) => {
    const url = `/api${endpoint}`;
    const params = {
      method,
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    };
    if (method === 'POST') params.body = JSON.stringify(config);
    return fetch(url, params).then(res => res.json());
  };

  return {
    signup: () => call('/signup', 'POST'),
    token: {
      create: () => call('/token', 'POST'),
      del: () => call('/token', 'DELETE'),
    },
    step: {
      post: () => call('/step', 'POST'),
      get: () => call('/step', 'GET'),
    },
  };
};
