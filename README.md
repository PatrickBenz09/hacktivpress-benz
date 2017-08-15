# hacktivpress-benz

Simple Blog App for phase 2 live-code

## REST API

List of user routes:

| Route         | HTTP          | Description                     |
| ------------- |:-------------:| :------------------------------ |
| /register     | POST          | Register with new user info     |
| /login        | POST          | Login and get an access token   |
| /users        | GET           | Get all the users info          |


List of user routes:

| Route                         | HTTP       | Description                                            |
| ----------------------------- |:----------:| :----------------------------------------------------- |
| /articles                     | GET        | Get all the articles info                              |
| /articles/:id                 | GET        | Get a single article info                              |
| /articles/author/:author      | GET        | Get a single article info by author                    |
| /articles/category/:category  | GET        | Get a single article info by category                  |
| /articles/                    | POST       | Create an article                (need to login first) |
| /articles/:id                 | DELETE     | Delete an article                (need to login first) |
| /articles/:id                 | PUT        | Update an article with new info  (need to login first) |
