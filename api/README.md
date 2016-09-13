# API
This is a RESTful API that returns JSON by default. Currently, the following actions can be performed using this API.

1. Signup
2. Login / Logout
3. Increment Step
4. Get Furthest Step

## Endpoints
### `POST /api/signup`
The accepted parameters are `username` and `password`. For example,

```js
const params = {
  username: 'foo',
  password: 'bar'
};

fetch('/api/signup', {
  method: 'POST',
  body: JSON.stringify(params),
  headers: {
    'Content-Type': 'application/json'
  }
);
```
The response will be:

```json
{ "success": true, "message": "Signup Successful"}
```

Or, if there was an error:

```json
{ "success": false, "error": "User Exists" }
```

### `POST /api/token`
The required parameters are `username` and `password`. The token returned will be used for the other API calls.

```js
const params = {
  username: 'foo',
  password: 'bar'
};

fetch('/api/token', {
  method: 'POST',
  body: JSON.stringify(params),
  headers: {
    'Content-Type': 'application/json'
  }
);
```
 
The response will be:

```json
{ "success": true, "message": "Login Successful", "token": "some token"}
```

Or, if there was an error:

```json
{ "success": false, "error": "Login Failed" }
```

### `DELETE /api/token`
HTTP Basic Authentication is required, with username and password (set to the session token) encoded in Base64. For example,

```js
const username = 'foo';
const token = 'a session token';
const auth = 'Basic ' + new Buffer(username + ':' + token).toString('base64');
fetch('/api/token', {method: 'DELETE', headers: {'Authorization': auth}});
```

```
 
The response will be:

```json
{ "success": true, "message": "Logout Successful" }
```

Or, if there was an error:

```json
{ "success": false, "error": "Logout Failed" }
```


### `POST /api/step`
HTTP Basic Authentication is required, with username and password (set to the session token) encoded in Base64. For example,

```js
const params = {
  username: 'foo',
  password: 'bar'
};

fetch('/api/token', {
  method: 'POST',
  body: JSON.stringify(params),
  headers: {
    'Content-Type': 'application/json'
  }
).then((res) => {
  const token = res.token;
  const auth = 'Basic ' + new Buffer(username + ':' + token).toString('base64');
  fetch('/api/step', {method: 'POST', headers: {'Authorization': auth}});
});
```

The response will be:

```json
{ "success": true, "message": "Increment Successful", "step": 1}
```

Or, if there was an error:

```json
{ "success": false, "error": "Authentication Failed" }
```

### `GET /api/step`
Again, HTTP Basic Authentication is required, with username and password (set to be the session token) encoded in Base64. For example,

```js
const params = {
  username: 'foo',
  password: 'bar'
};

fetch('/api/token', {
  method: 'POST',
  body: JSON.stringify(params),
  headers: {
    'Content-Type': 'application/json'
  }
).then((res) => {
  const token = res.token;
  const auth = 'Basic ' + new Buffer(username + ':' + token).toString('base64');
  fetch('/api/step', {method: 'GET', headers: {'Authorization': auth}});
});
```

The response will be:

```json
{ "success": true, "step": 1}
```

Or, if there was an error:

```json
{ "success": false, "error": "Authentication Failed" }
```
