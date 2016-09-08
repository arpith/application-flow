import redis from 'redis';
import bluebird from 'bluebird';
import basicAuth from 'basic-auth';

bluebird.promisifyAll(redis.RedisClient.prototype);
const bcrypt = bluebird.promisifyAll(require('bcrypt'));
const client = redis.createClient();

export function signup(username, password) {
  return bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(password, salt);
  }).then(function(hash) {
    return client.setnxAsync('auth:'+username, hash);
  });
}

export function auth(req) {
  const user = basicAuth(req);
  if (!user || !user.name || !user.pass) return false;
  return client.getAsync('auth:' + user.name).then((hash) => {
    if (hash === 'nil') return false;
    else return bcrypt.compareAsync(user.pass, hash);
  });
}
