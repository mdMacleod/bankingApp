console.log('****CONTROLLERS*****');
const User = require('../models/user.js');
const Account = require('../models/account.js');
const Checking = require('../models/account.js');
const Savings = require('../models/account.js');
const Loan = require('../models/account.js');
const Credit = require('../models/account.js');

module.exports = {
    index: function (req, res) {
        console.log("*****CONTROLLER******")
        Account.find()
            .then(data => res.json({ pets: data }))
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err.errors[key].message);
            });
    },


    csv: function(req, res) {
        
    const account = Account.find({_id: req.params.id})
        
        const filename = "${account.lastFour}"+'_'+"transactions";
        const transactions = account.transactions;

            //NOTE .lean() transforms a mongoose document into a javascript array;
        transactions.lean().exec({}, function (err, transactionList) {
            if (err) res.json(err);

            res.setHeader('Content-Type', 'text/csv');

            res.setHeader("Content-Disposition", 'attachment; filename='+filename);

            res.csv(transactionList, true);
            
        })
    },

    
    show: function (req, res) {
        console.log('**CONTROLLER GETONE ***', req.params)
        Account.findOne({ _id: req.params.id})
            .then(account => res.json({account: account}))
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err.errors[key].message);
            });
    },



    createChecking: function (req, res) {
        User.findOne({_id: req.params.id})
        .then(user => {
            const account = new Checking()
            account._user = user;
            return account.save()
        })
        .then(account => {
            console.log(account)
            User.findOne({_id: req.params.id})
            .then(user => {
                user.accounts.push(account);
                user.save();
            })
        })
        .then((newCheckingData) => res.json({message: 'Success', account: newCheckingData}))
        .catch(err => res.json({ errors: err }))
    },

    createSavings: function (req, res) {
        User.findOne({_id: req.params.id})
        .then(user => {
            const account = new Savings()
            account._user = user;
            return account.save()
        })
        .then(account => {
            console.log(account)
            User.findOne({_id: req.params.id})
            .then(user => {
                user.accounts.push(account);
                user.save();
            })
        })
        .then((newSavingsData) => res.json({message: 'Success', account: newSavingsData}))
        .catch(err => res.json({ errors: err }))
    },

    createLoan: function (req, res) {
        User.findOne({_id: req.params.id})
        .then(user => {
            const account = new Loan()
            account._user = user;
            return account.save()
        })
        .then(account => {
            console.log(account)
            User.findOne({_id: req.params.id})
            .then(user => {
                user.accounts.push(account);
                user.save();
            })
        })
        .then((newLoanData) => res.json({message: 'Success', account: newLoanData}))
        .catch(err => res.json({ errors: err }))
    },

    createCredit: function (req, res) {
        User.findOne({_id: req.params.id})
        .then(user => {
            const account = new Credit()
            account._user = user;
            return account.save()
        })
        .then(account => {
            console.log(account)
            User.findOne({_id: req.params.id})
            .then(user => {
                user.accounts.push(account);
                user.save();
            })
        })
        .then((newCreditData) => res.json({message: 'Success', account: newCreditData}))
        .catch(err => res.json({ errors: err }))
    },

    update: function (req, res) {
        console.log(req.body);
        User.findOne({ _id: req.body._id })
            .then(pet => {

                return User.save();
            })
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("****ERRROR HERE****");
                console.log(err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json({errors: err});
            });
    },

    destroy: function (req, res) {
        console.log("Destroy_CONTROLLER", req.params);
        User.findOne({_id: req.params.id})
        .then(user =>{ (console.log( "***FOUND_DESTROY_PET***", pet))
            user.remove()
        })
        .then(saveresult => res.json(saveresult))
        .catch(err => {
            console.log("****ERRROR HERE****");
            console.log(err);
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json({errors: err.errors});
        });
    },
}
