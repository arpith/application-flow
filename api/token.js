import { login, logout } from './lib/auth';

export default (req, res) => {
  const routes = { POST: login, DELETE: logout };
  routes[req.method](req).then((token) => {
    const action = routes[req.method].name;
    const uppercase = action.charAt(0).toUpperCase() + action.slice(1);
    const message = `${uppercase} Successful`;
    res.json({ success: true, message, token });
  });
};
