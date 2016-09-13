import { login } from './lib/auth';

export default (req, res) => {
  login(req).then(function(token) {
    if (!token) {
      res.status(401).send({success: false, error: 'Authentication Failure'});
    } else {
      res.send({success: true, message: 'Login Successful', token: token});
    }
  });
};
