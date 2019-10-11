const Projects = require('../database/helpers/projectModel')

module.exports = {
    logger,
    validateProjId,
}

//Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
    next();
}

//Validate the project id 

function validateProjId(req, res, next) {
    const projectId = req.body.projects_id
    Projects.findById(projectId)
        .then(project => {
            if (project) {
                next()
            } else {
                res.status(400).json({ message: 'id does not exist' })
            }
        })
        .catch(err => res.status(500).json({ message: "error validating project id" }))
}

