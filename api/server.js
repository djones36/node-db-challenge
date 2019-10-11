const express = require('express');
const server = express();
const mw = require('../middleware/globalMiddleware');
const projectsRoute = require('../api/routes/projectsRoute');
const taskRoute = require('../api/routes/taskRoute');
const resourceRoute = require('../api/routes/resourceRoute');


server.use(express.json(), mw.logger);

//Routes
server.use('/api/projects', projectsRoute);
server.use('/api/resources', resourceRoute);
server.use('/api/tasks', taskRoute);

//Deployment 
server.get('/', (req, res) => {
    res.status(200).json("Successful Deployment")
})

module.exports = server;