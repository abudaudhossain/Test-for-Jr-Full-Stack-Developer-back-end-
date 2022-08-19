const mongoose = require('mongoose')

const field = {
    id: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    }
}

const appUserSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model('AppUser', appUserSchema)