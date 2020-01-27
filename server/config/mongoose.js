console.log('****MONGOOSE****');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bankApp', { useNewUrlParser: true, useUnifiedTopology: true });
