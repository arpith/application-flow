# Models
The API uses Redis as a datastore for both auth as well as the current step the user is on.

## Auth
This is a string with key prefixed by the namespace "auth:" followed by the username. The value is the bcrypt hash of the password.

## Tokens
This is a set of string tokens with key prefixed by the namespace "tokens:" followed by the username. The tokens are base64url encoded random bytes.

## Step
This is also a string, the key is prefixed by the namespace "step:" followed by the username. The value is the current step the user is on, an integer ranging from 0 to 4. The API returns step + 1.
