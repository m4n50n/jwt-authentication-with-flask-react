# ![4Geeks Logo](http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks,16) JWT Authentication with Flask & React.js

![screenshot](https://raw.githubusercontent.com/m4n50n/jwt_authentication_with_flask_react/main/screenshot_preview.gif)

✏ Implementing an authentication system with the following parts:

1. **Signup**: The user must be able to pick its email, any password and submit the form. A new user must be created in the database and the user must be redirected to the login form afterwards.
2. **Login**: The user fills out its email and password and it's redirected to the private dashboard after successfull authentication.
3. **Validation**: Any page considered "private" must always validate that the current user is valid, if not, the page must redirect the user back to login.
4. **Logout**: Any moment the user must be able to press _logout_ in the navbar and it will get redirected back to the login path.

## Code schema 🔩

The following pages and React components have been implemented into the project:

| Path       | Component   | Functionality                                                     |
| ---------- | ----------- | ----------------------------------------------------------------- |
| `/signup`  | `<Signup>`  | Renders the signup form                                           |
| `/login`   | `<Login>`   | Renders the login form                                            |
| `/private` | `<Private>` | Validates that only authenticated users and render this component |

## Preview 🎬

* You can open this repository in **Gitpod**.
* **IMPORTANT**! You must change the *value of the ***URL*** const variable* of the ***'./src/front/js/service/api_request.js'*** file so that it is directed to the API server correctly.

### ▪ Back-End

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Postgresql recommended)

1. If you have problems with the database, run the following commands before starting the API server: 
* `$ pipenv run migrate` 
* `$ pipenv run upgarde`

1. Run the application: `$ pipenv run start`

### ▪ Front-End

1. Start the webpack server with live reload running the next command: `$ npm run start`
2. If you can't start the server, run the following command: `$ npm install`

## Sources 📌

<https://learn.breatheco.de/course/full-stack.v4/25/p/jwt-authentication-with-flask-react>

<https://github.com/breatheco-de/jwt-authentication-with-flask-react>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)
