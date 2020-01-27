console.log('*****ROUTES*****');
const path =  require("path");
const users = require('../controllers/users.js')

module.exports = function(app) {

    app.get('/app/users/all', function(req, res) {
        users.index(req, res);
    })

    app.get('/app/users/:id', function(req, res) {
        console.log("***ROUTESJS***", req.params.id)
        users.show(req, res);
    })

    app.post('/app/users/create', function(req, res) {
        users.create(req, res);
    })

    app.put('/app/users/update', function(req, res) {
        console.log("**UPDATE ROUTE***", req.body)
        users.update(req, res);
    })

    app.delete('/app/users/destroy/:id', function(req, res) {
        console.log("***DELETE_IN_ROUTES_JS***")
        users.destroy(req, res);
    })

}