const express = require('express');
const resourcesRouter = express.Router();

resourcesRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

resourcesRouter.route('/blog/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the blog entries to you');
})
.post((req, res) => {
    res.end(`Will add the blog entry: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /blog');
})
.delete((req, res) => {
    res.end('Deleting all blog entries');
});

resourcesRouter.route('/blog/:entryId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the blog entry: ${req.params.entryId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /resources/blog/${req.params.entryId}`);
})
.put((req, res) => {
    res.write(`Updating the blog entry: ${req.params.entryId}\n`);
    res.end(`Will update the blog entry: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting blog entry: ${req.params.entryId}`);
});

module.exports = resourcesRouter;