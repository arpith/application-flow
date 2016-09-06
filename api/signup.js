const redis = require('redis');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt'));
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

export default (req, res) => {
  bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(req.body.password, salt);
  }).then(function(hashedPassword) {
    return client.setnxAsync("auth:"+req.body.username, hashedPassword);
  }).then(function(resp) {
    if (resp === 0) {
      res.status(403).json({success: false, error: 'User exists'});
    } else {
      res.json({success: true, message: 'Signup Successful'});
    }
  });
};
