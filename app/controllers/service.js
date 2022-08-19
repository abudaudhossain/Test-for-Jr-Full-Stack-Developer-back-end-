const handlers = require("../exceptions/handlers");
const NotAcceptableError = require("../exceptions/NotAcceptableError");
const nativeResponse = require("../helpers/nativeResponse");
const helper = require("../helpers/validation/helper");
const NotFoundError = require("../exceptions/NotFoundError");
const ValidationError = require("../exceptions/ValidationError");


// model
const AppUser = require("../models/user")
const AppBooks = require("../models/book");


module.exports = {
    createUserAccount: async (req, res) => {
        let message = "Create New User account";
        const { name, email } = req.body
        try {
            //@ validation part
            //check email and name validated
            helper.objExit(["email", "name"], req.body)
            helper.isEmpty([name, email]);

            // ==> name validation
            if (helper.nameValidation(name)) throw new ValidationError("Should be use Only character in name");
            // ==> email validation
            helper.emailValidation(email)

            //@ business part
            const users = await AppUser.find({ email: email })

            if (users.length !== 0) throw new NotAcceptableError("User account already has . please create anther email")

            const id = helper.getToken("UserPro")
            const newAccount = new AppUser({
                id,
                name,
                email,
            })
            await newAccount.save();

            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": { user: newAccount }
            }, 200, res)

        } catch (error) {
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)
        }
    },

    addBook: async (req, res) => {
        let message = "add a new Book";
        const { name, description } = req.body
        const userId = req.headers.userid;
        console.log(userId)
        try {
            //@ validation part
            //check email and name validated
            helper.objExit(["description", "name"], req.body)
            helper.isEmpty([name, description]);

            //@ business part
            const users = await AppUser.find({ id: userId })

            if (users.length === 0) throw new NotFoundError("This user id is wrong")

            const id = helper.getToken("BOOK")
            const newBook = new AppBooks({
                id,
                userId,
                name,
                description,
            })
            await newBook.save();

            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": { user: newBook }
            }, 200, res)

        } catch (error) {
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)
        }
    },
    getBookByUserId: async (req, res) => {
        const { userid } = req.headers;

        try {
            //@ business part
            const books = await AppBooks.find({ userId: userid })
            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": "find books",
                "errorLog": "",
                "data": { books }
            }, 200, res)

        } catch (error) {
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)
        }
    },
    userDelete: async (req, res) => {
        let users = {};
        try {
            const { id } = req.params;

            const result = await AppUser.deleteOne({ id: id })
            if (result.acknowledged) {
                users = await AppUser.find({ })
            }


            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": "Delete user success fully",
                "errorLog": "",
                "data": { user: users }
            }, 200, res)

        } catch (error) {
            console.log(error)
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)

        }
    }
}