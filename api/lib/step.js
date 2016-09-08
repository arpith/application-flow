import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient(process.env.REDIS_URL);

export function increment(username) {
  return client.getAsync('step:'+username).then((step) => {
    console.log(step)
    if (step < 4) {
      return client.incrAsync('step:'+username);
    } else {
      return step;
    }
  });
}

export function get(username) {
  return client.getAsync('step:'+username).then(step => parseInt(step) + 1);
}
