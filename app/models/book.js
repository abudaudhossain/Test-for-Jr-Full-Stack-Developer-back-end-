const mongoose = require('mongoose')

const field = {
    id: {
        type: String
    },
    userId: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    }

}

const appBooksSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model('AppBooks', appBooksSchema)