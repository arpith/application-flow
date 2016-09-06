const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

export function increment(req, res) {
  client.incr("step:"+req.params.username).then(function(newStep) {
    if (newStep > 4) {
      return client.decr("step:"+req.params.username);
    } else {
      return newStep;
    }
  }).then(function(newStep) {
    res.send(newStep + 1);
  });
};

export function get(req, res) {
  client.get("step:"+req.params.username).then(function(step) {
    res.send(step + 1);
  });
};
