# hacktivpress-benz

Simple Blog App for phase 2 live-code

## REST API

List of user routes:

| Route         | HTTP          | Description                     |
| ------------- |:-------------:| :------------------------------ |
| /register     |POST           | Sign up with new user info      |
| /signin       |POST           | Sign in and get an access token |
| /users        |GET            | Get all the users info          |


List of user routes:

| Route            | HTTP          | Description                      |
| ---------------- |:-------------:| :------------------------------- |
| /articles        |GET            | Get all the articles info        |
| /articles/:id    |GET            | Get a single article info        |
| /articles/       |POST           | Create an article                |
| /articles/:id    |DELETE         | Delete an article                |
| /articles/:id    |PUT            | Update an article with new info  |
