const express = require('express');
const service = require('../app/controllers/service');

const { welcome } = require('../app/controllers/welcome');

const router = express.Router();

router.get("/", welcome)
router.post("/users", service.createUserAccount)  // create user account
router.post("/add/book", service.addBook)  // add to new book
router.get("/users/book", service.getBookByUserId)  // add to new book
router.delete("/users/:id", service.userDelete)  // add to new book



module.exports = router;