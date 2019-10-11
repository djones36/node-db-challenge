const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resources')

}

function findById(id) {
    return db('resources')
        .where({ id })
        .first()

}

function add(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => findById(id))
}