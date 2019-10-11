const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('tasks as t')
        .join('projects as p', 't.projects_id', 'p.id')
        .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as projects_name', 'p.description as projects_description')
        .then(tasks => {
            const convert = []

            tasks.forEach(task => {
                task.completed === 1 ? task.completed = true : task.completed = false
                convert.push(task)
            })

            return convert
        })
}



function add(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => findById(id))
}