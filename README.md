# API-Authentication-With-JWT-NodeJS

This is a basic API REST written on express js using async/await. Great for building a starter web API for your front-end (Android, iOS, Vue, react, angular, or anything that can consume an API)

### Version: 2.0.0

### Usage

```js
git clone https://github.com/maxwell-kimaiyo/API-Authentication-With-JWT-NodeJS.git

- Install server dependencies(in root directory)

```

```sh

npm install

```

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```

### MongoDB

Open "config.js" and add your MongoDB URI, local or Atlas and Your JWT token

```js
export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/Users',
  TOKEN_SECRET=process.env.TOKEN_SECRET || IJGKHFBNDSJLNKFDBBNKGB
};

```


### Support

Reach out to me at one of the following places!

- Twitter at <a href="http://twitter.com/maxxmalakwen" target="_blank">`@maxxmalakwen`</a>

Let me know if you have any questions. [Email Maxwell](developerkimaiyo@gmail.com)



---

### License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">Maxwell Kimaiyo</a>.
