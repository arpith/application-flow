# API
This is a RESTful API that returns JSON by default. 

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

### `POST /api/login`
The required parameters are `username` and `password`. The response will be:

```json
{ "success": true, "message": "Login Successful"}
```

Or, if there was an error:

```json
{ "success": false, "error": "Login Failed" }
```

### `POST /api/step`
HTTP Basic Authentication is required, with username and password encoded in Base64. For example,

```js
const username = 'foo';
const password = 'bar';
const auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
fetch('/api/step', {method: 'POST', headers: {'Authorization': auth}});
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
Again, HTTP Basic Authentication is required, with username and password encoded in Base64. For example,

```js
const username = 'foo';
const password = 'bar';
const auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
fetch('/api/step', {method: 'GET', headers: {'Authorization': auth}});
```

The response will be:

```json
{ "success": true, "step": 1}
```

Or, if there was an error:

```json
{ "success": false, "error": "Authentication Failed" }
```
