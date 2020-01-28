console.log('***ACCOUNT ROUTES***')

const accounts = require('../controllers/accounts.js')

module.exports = function(app){

    app.get('/app/accounts/all/:id', function(req, res) {
        //NOTE ID PARAM HERE IS USER ID
        console.log('GET_ALL_ACCOUNTS_ROUTE')
        accounts.index(req, res);
    })

    app.get('/app/accounts/:id', function(req, res) {
        console.log("***GET_ONE_ACCOUNT_ROUTE***", req.params.id);
        accounts.show(req, res);
    })

    app.post('/app/accounts/checking/create/:id', function(req, res) {
        //NOTE ID PARAM HERE IS USER ID
        console.log('***CREATE_CHK_ACCOUNT_ROUTE***');
        accounts.createChecking(req, res);
    })

    app.post('/app/accounts/savings/create/:id', function(req, res) {
        //NOTE ID PARAM HERE IS USER ID
        console.log('***CREATE_SVG_ACCOUNT_ROUTE***');
        accounts.createSavings(req, res);
    })

    app.post('/app/accounts/loan/create/:id', function(req, res) {
        //NOTE ID PARAM HERE IS USER ID
        console.log('***CREATE_LN_ACCOUNT_ROUTE***');
        accounts.createLoan(req, res);
    })

    app.post('/app/accounts/credit/create/:id', function(req, res) {
        //NOTE ID PARAM HERE IS USER ID
        console.log('***CREATE_CC_ACCOUNT_ROUTE***');
        accounts.createCredit(req, res);
    })

    app.put('/app/accounts/update', function(req, res) {
        console.log("**UPDATE_ACCOUNT_ROUTE***", req.body);
        accounts.update(req, res);
    })

    app.delete('/app/accounts/destroy/:id', function(req, res) {
        console.log("***DELETE_ACCOUNT_ROUTE***");
        accounts.destroy(req, res);
    })

    app.get('/app/exporttocsv', function(req, res, next) {
        console.log("**CSV_ACCOUNT_ROUTE**")
        accounts.csv(req, res);
    })
}