console.log('***TRANSACTION_ROUTES***')

const transactions = require('../controllers/transactions.js')

module.exports = function(app){
    app.get('/app/transactions/all/:id', function(req, res) {
        //NOTE ID PARAM HERE IS ACCOUNT ID
        transactions.index(req, res);
    })

    app.get('/app/transactions/:id', function(req, res) {
        console.log("**GET_ONE_TRANSACTION_ROUTE**", req.params.id)
        transactions.show(req, res);
    })

    app.post('/app/transactions/create/:id', function(req, res) {
        //NOTE ID PARAM HERE IS ACCOUNT ID
        transactions.create(req, res);
    })

    app.put('/app/transactions/update', function(req, res) {
        console.log("**UPDATE ROUTE***", req.body)
        transactions.update(req, res);
    })

    app.delete('/app/transactions/destroy/:id', function(req, res) {
        console.log("**TRANSACTION_ROUTE_DELETE**")
        transactions.destroy(req, res);
    })
}