import redis from 'redis';
import bluebird from 'bluebird';
import basicAuth from 'basic-auth';
import base64url from 'base64url';
import crypto from 'crypto';

bluebird.promisifyAll(redis.RedisClient.prototype);
const bcrypt = bluebird.promisifyAll(require('bcrypt'));
const client = redis.createClient(process.env.REDIS_URL);

function addToken(username) {
  const token = base64url(crypto.randomBytes(24));
  return client.saddAsync('tokens:'+username, token).then((reply) => {
    if (reply !== 1) return false;
    else return token;
  });
}

export function signup(username, password) {
  return bcrypt.genSaltAsync(10).then((salt) => {
    return bcrypt.hashAsync(password, salt);
  }).then((hash) => {
    return client.setnxAsync('auth:'+username, hash);
  }).then((reply) => {
    if (reply !== 1) return false;
    else return addToken(username);
  });
}

export function login(req) {
  return client.getAsync('auth:' + req.body.username).then((hash) => {
    if (hash === 'nil') return false;
    else return bcrypt.compareAsync(req.body.password, hash);
  }).then((success) => {
    if (!success) return false;
    else return addToken(req.body.username);
  });
}

export function logout(req) {
  const user = basicAuth(req);
  return client.sremAsync('tokens:'+user.name, user.pass);
}

export function auth(req) {
  const user = basicAuth(req);
  if (!user || !user.name || !user.pass) return false;
  return client.sismemberAsync('tokens:' + user.name, user.pass).then((reply) => {
    if (reply === 1) return true;
    else return false;
  });
}
