import auth from './lib/auth';
import {increment, get} from './lib/step';

export default (req, res) => {
  const routes = {'GET': get, 'POST': increment};
  auth(req.params.username, req.params.password).then((success) => {
    if (!success) {
      res.status(401).send('Authentication Failed');
    } else {
      routes[req.method](req.params.username).then((step) => {
        res.send(step);
      });
    }
  });
};
