import {signup} from './lib/auth';

export default (req, res) => {
  signup(req.body.username, req.body.password).then((resp) => {
    if (resp === 0) {
      res.status(403).json({success: false, error: 'User exists'});
    } else {
      res.json({success: true, message: 'Signup Successful'});
    }
  });
};
