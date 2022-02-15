require('dotenv').config()
const express = require('express');
const app = express();


const routes = require('./routes')

app.use('/', routes.home);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});