console.log('***Transaction_MODEL***');

const accounts = require('../models/account.js');
console.log(comments);
const mongoose = require('mongoose')
    const TransactionSchema = new mongoose.Schema({
        date: {type: date},
        amount: {type: Number},
        type: {type: String}, 
        location: {type: String},
    }, { timestamps: true })
    const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction
