require('dotenv').config();
var bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const routes = require('./routes')

app.use('/', routes.home);
app.use('/chars', routes.chars);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});