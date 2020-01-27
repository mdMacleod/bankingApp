console.log('***ACCOUNT_MODEL***');

const mongoose = require('mongoose');
extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;

AccountSchema.plugin(immutablePlugin);

const transactions = require('../models/transaction.js');

    const AccountSchema = new mongoose.Schema({

        accountNumber: {type: Number,
        immutable: true},

        balance: { type: Number, default: [0] },
        transactions: [transactions.schema],
    }, { timestamps: true }, { collection: 'accounts', discriminatorKey : '_type'})

    const CheckingSchema = AccountSchema.extend({
    })

    const SavingSchema = AccountSchema.extend({
        interest: {type: Number},
        minimum_balance: {type: Number},
    })

    const LoanSchema = AccountSchema.extend({
        interest: {type: Number},
        number_of_payments: {type: Number},
        minimum_payment: {type: Number},
    })

    const CreditSchema = AccountSchema.extend({
        interest: {type: Number},
        points: {type: Number},
        available_credit: {type: Number},
        minimum_payment: {type: Number}
    })

    AccountSchema.pre('save', function(next) {
        this.accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    })
    
const Account = mongoose.model('Account', AccountSchema);
    Checking = mongoose.model('Checking', CheckingSchema),
    Saving = mongoose.model('Saving', SavingSchema);
    Loan = mongoose.model('Loan', LoanSchema);
    Credit = mongoose.model('Credit', CreditSchema);


module.exports = Account, Checking, Saving, Loan, Credit
