# ![4Geeks Logo](http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks,16) JWT Authentication with Flask & React.js

![screenshot](https://raw.githubusercontent.com/m4n50n/jwt-authentication-with-flask-react/main/login_diagram.jpeg)

✏ Implementing an authentication system with the following parts:

1. **Signup**: The user must be able to pick its email, any password and submit the form. A new user must be created in the database and the user must be redirected to the login form afterwards.
2. **Login**: The user fills out its email and password and it's redirected to the private dashboard after successfull authentication.
3. **Validation**: Any page considered "private" must always validate that the current user is valid, if not, the page must redirect the user back to login.
4. **Logout**: Any moment the user must be able to press _logout_ in the navbar and it will get redirected back to the login path.

## Front-End Installation 📄

1. Install the packages: `$ npm install`
2. Start the webpack dev server by running: `$ npm run start`

## Sources 📌

<https://learn.breatheco.de/course/full-stack.v4/25/p/jwt-authentication-with-flask-react>

<https://github.com/breatheco-de/jwt-authentication-with-flask-react>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)
