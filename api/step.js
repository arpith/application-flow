import basicAuth from 'basic-auth';
import { auth } from './lib/auth';
import { increment, get } from './lib/step';

export default (req, res) => {
  const routes = { GET: get, POST: increment };
  const user = basicAuth(req);
  const username = user.name;
  auth(req).then((success) => {
    if (!success) {
      res.status(401).json({ success: false, error: 'Authentication Failed' });
    } else {
      routes[req.method](username).then((step) => {
        const action = routes[req.method].name;
        const uppercase = action.charAt(0).toUpperCase() + action.slice(1);
        const message = `${uppercase} Successful`;
        res.json({ success: true, message, step });
      });
    }
  });
};
