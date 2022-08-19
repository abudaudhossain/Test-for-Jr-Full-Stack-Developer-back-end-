# Test for Jr Full Stack Developer Backend Assessment Questions -2
 
### Features

- Add new user API
- Get user Books
- Delete user by user id
- Add new Book


## Tech Stack

**Back-End:** 
- Node.js
- Express

**Database:** 
- MongoDB
- Mongoose.

**NPM Package:**
- cros
- dotenv
- nodemon

# Table of Contents

  - [Quick Start](#quick-start)
  - [Quick Start](#Using-API)
  - [File Structure](#file-structure)
  - [Browser Support](#browser-support)
  - [Follow Us](#follow-us)
  - [Licensing](#licensing)

## Quick Start

You can use following method to get started with React Application of the EHKit system.

### Part 1: Using NPM
1. Unzip File first

2. Install Dependency
```
npm install
```

3. Run on development 
```
npm start
```

## Using API

1. Impotent Variable 
```
const baseUrl = "http://localhost:5000";

```

1. Create New User:

```
  const userAccount = {
  "name": "User Name",
  "email": "user email",
}
  axios.post(`${baseUrl}/users`, userAccount)
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```


2. Get User Books:

```
  axios.get(`${baseUrl}/users/book`,headers: {
        'userid': `${userId}`
      } )
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

3. Delete users:

```
  axios.delete(`${baseUrl}/users/${userId}`)
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```
4. Add books users:

```
  const books = {
  "name":"book name"
  "description":"Description book",
  }

  axios.post(`${baseUrl}/users`, books,headers: {
        'userid': `${userId}`
      })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```


## File Structure
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
```
github/hope-ui-admin-dashboard/

root
  ├── App
  │    ├── controllers
  │    │    ├── service.js
  │    │    └── welcome.js
  │    ├── exceptions
  │    │    ├── handlers.js
  │    │    ├── NotAcceptableError.js
  │    │    ├── NotFountError.js
  │    │    ├── UnauthorizedError.js
  │    │    └── ValidationError.js
  │    ├── helpers
  │    │    ├── validation
  │    │    │    └──helper.js    
  │    │    ├── nativeResponse.js
  │    │    └── utils.js
  │    ├── middleware/
  │    ├── models  
  │    │    ├── book.js
  │    │    └── user.js
  │    ├── services/
  ├── routes
  │    └── api.js
  ├── .env
  ├── .gitignore
  ├── index.js
  ├── package-lock.json
  ├── package.json
  └── README.md
```
## Browser Support
![chrome](https://assets.iqonic.design/hope-ui/github/chrome.png)
![Firefox](https://assets.iqonic.design/hope-ui/github/Firefox.png)
![Safari](https://assets.iqonic.design/hope-ui/github/Safari.png)
![Microsoft](https://assets.iqonic.design/hope-ui/github/Microsoft%20edge.png)
![Operamini](https://assets.iqonic.design/hope-ui/github/Operamini.png)

## Follow Us
- [Twitter](https://twitter.com/webexpert24abu)
- [Facebook](https://www.facebook.com/abudaud.dev/)
- [LinkedIn](https://www.linkedin.com/in/abudauddev/)
- [Instagram](https://www.instagram.com/abudauddev/)

## Licensing
- Code and Documentation Copyright 2022 All Rights Reserved by [Abu Daud Hossain](https://github.com/abudaudhossain) Development.