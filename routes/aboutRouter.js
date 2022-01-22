const express = require('express');
const aboutRouter = express.Router();

aboutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

module.exports = aboutRouter;