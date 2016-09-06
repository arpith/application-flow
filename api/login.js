import { auth } from './lib/auth';

export default (req, res) => {
  auth(req.body.username, req.body.password).then(function(success) {
    if (!success) {
      res.status(401).send({success: false, error: 'Authentication Failure'});
    } else {
      res.send({success: true, message: 'Login Successful'});
    }
  });
};
