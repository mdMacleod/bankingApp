console.log('****CONTROLLERS*****');

const Account = require('../models/account.js');

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
        User.findOne({ _id: req.params.id})
            .then(pet => res.json({pet: pet}))
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err.errors[key].message);
            });
    },


    create: function (req, res) {
        console.log(req.body);
        User.find({name: req.body.name})
        .then( user => {
            if (user.length > 0) {
                return Promise.reject ({unique: "That pet already exists!"})
            }
            return User.create(req.body)
        })

            .then(data => { console.log(data); res.json(data) })
            .catch(err => {
                console.log("****ERRROR HERE****");
                console.log(err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                console.log("***ERRORS HERE ***", err)
                res.json({ errors: err });
            });
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
