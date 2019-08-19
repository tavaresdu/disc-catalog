const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var models = require('./models');
models.sequelize.sync().then(function () {
    console.log('Database OK!');
}).catch(function (err) {
    console.log(err, 'Error in database sync!');
})

app.use(require('./routes'));

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});