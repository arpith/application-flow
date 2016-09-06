const auth = require('./lib/auth');

export default (req, res) => {
  auth(req.params.username, req.params.password).then(function(success) {
    if (!success) {
      res.status(401).send('Login Failed');
    } else {
      res.send('Login Successful');
    }
  });
};
