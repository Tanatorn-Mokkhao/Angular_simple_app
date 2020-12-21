const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const server = app.listen(3000, function () {
    const port = server.address().port();
    console.log("Server is running.. at part: %s", port)
})