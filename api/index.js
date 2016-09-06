import signup from './signup.js';
import login from './login.js';
import step from './step.js';

const endpoints = {
  'signup': signup,
  'login': login,
  'step': step
};

export default (req, res) => endpoints[req.params.endpoint](req, res);
