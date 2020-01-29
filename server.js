console.log('***SERVER***');
const path =  require("path");
const express = require("express");
const app = express();
const bestinstrucotor = 'chris'
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

var csv = require('csv-express');


//NOTE Errors and Session
const flash = require('express-flash');
const session = require('express-session');
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/mongoose.js');
require('./server/config/userRoutes.js')(app);
require('./server/config/accountRoutes.js')(app);
require('./server/config/transactionRoutes.js')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})

app.listen(8000, () => console.log("listening on port 8000"));