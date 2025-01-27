const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add
}
function find() {
    return db('projects')
        .then(projects => {
            const converter = []// will hold new array of objs
            projects.forEach(project => {
                if (project.completed === 1) {
                    return project.completed = true

                } else {
                    return project.completed = false
                }
            })
            converter.push(projects)//push the new array of objects
            return converter
        })
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
        .then(project => {
            if (project.completed === 1) {
                return project.completed = true, project
            } else {
                return project.completed = false, project
            }
        })
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => findById(id))
}