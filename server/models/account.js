console.log('***ACCOUNT_MODEL***');

const mongoose = require('mongoose');

var options = {discriminatorKey: 'type'};


const transactions = require('../models/transaction.js');

const AccountSchema = new mongoose.Schema({
    
    accountNumber: {type: Number,
        immutable: true},
        
        balance: { type: Number, default: 0 },
        transactions: [transactions.schema],
        
    }, options, { timestamps: true }, { collection: 'accounts', discriminatorKey : '_type'})
    
    
    AccountSchema.pre('save', function(next) {
        this.accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    })

    //TODO  NEEDS TO BE TESTED
    AccountSchema.virtual('lastFour').get(function() {
        const split = this.accountNumber.split()
        const lastFour = [];
            for (var i=7; i<split.length; i++){
                lastFour.push(split[i]);
            }
        return lastFour.join("");
    })
    
    const Account = mongoose.model('Account', AccountSchema);
    
    const Checking = Account.discriminator('checking',
        new mongoose.Schema({
        })
    )

    const Savings = Account.discriminator('savings',
        new mongoose.Schema({
            interest: {type: Number},
            minimum_balance: {type: Number},
        })
    )

    const Loan = Account.discriminator('loan',
        new mongoose.Schema({
            interest: {type: Number},
            number_of_payments: {type: Number},
            minimum_payment: {type: Number},
        })
    )

    const Credit = Account.discriminator('credit',
        new mongoose.Schema({
            interest: {type: Number},
            points: {type: Number},
            available_credit: {type: Number},
            minimum_payment: {type: Number}
        })
    )

module.exports = Account, Checking, Savings, Loan, Credit
