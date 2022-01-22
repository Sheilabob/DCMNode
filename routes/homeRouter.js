const express = require('express');
const homeRouter = express.Router();

homeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

module.exports = homeRouter;