import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient(process.env.REDIS_URL);

export function increment(username) {
  return client.getAsync(`step:${username}`).then((step) => {
    if (step < 4) {
      return client.incrAsync(`step:${username}`);
    }
    return step;
  }).then(step => parseInt(step, 10) + 1);
}

export function get(username) {
  return client.getAsync(`step:${username}`).then(step => parseInt(step, 10) + 1);
}
