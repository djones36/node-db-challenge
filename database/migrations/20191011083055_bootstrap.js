exports.up = function (knex) {
    return knex.schema
        .createTabel('projects', tbl => {
            //primary key
            tbl.increments()
            //name - required
        })
};

exports.down = function (knex) {

};
