console.log('***USER_MODEL***');

const accounts = require('../models/account.js');
require('mongoose-type-email');

const mongoose = require('mongoose')

    const UserSchema = new mongoose.Schema({
        firstName: {type: String},
        lastName: {type: String},
        birthday: {type: Date},
        email: {type: mongoose.SchemaTypes.Email, required: true},
        password: {type: String},
        accounts: [accounts.schema]
    }, { timestamps: true })


//NOTE THIS WILL ALLOW YOU TO CALL user.fullname without saving a fullname field in DB.
    UserSchema.virtual('fullname').get(function() {  
        return this.firstName + ' ' + this.lastName;
    });

    const User = mongoose.model('User', UserSchema);
module.exports = User
