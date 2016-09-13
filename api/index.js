import signup from './signup.js';
import token from './token.js';
import step from './step.js';

const endpoints = {
  'signup': signup,
  'token': token,
  'step': step
};

export default (req, res) => endpoints[req.params.endpoint](req, res);
