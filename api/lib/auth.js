const redis = require('redis');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt'));
bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

export function auth(username, password) {
  return client.getAsync('auth:' + username).then((hash) => {
    if (hash === 'nil') return false;
    else return bcrypt.compareAsync(password, hash);
  });
}
