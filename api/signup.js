const redis = require('redis');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

export default (req, res) => {
  bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(req.params.password, salt, null);
  }).then(function(hashedPassword) {
    return client.setnx("auth:"+req.params.username, hashedPassword);
  }).then(function(resp) {
    if (resp === "0") {
      res.status(403).json({success: false, error: 'User exists'});
    } else {
      res.json({success: true, message: 'Signup Successful'});
    }
  });
};
