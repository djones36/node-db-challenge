exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            //primary key
            tbl.increments()
            //name - required
            tbl.string('name', 128).notNullable()
            tbl.text('description', 255)
            //Completed? true or false required
            tbl.boolean('completed').notNullable().defaultTo(false)
        })
        .createTable('resources', tbl => {
            //PK
            tbl.increments()
            //name - required
            tbl.string('name', 128).notNullable()
            tbl.text('description', 255)
        })
        .createTable('tasks', tbl => {
            //PK
            tbl.increments()
            //Description -required
            tbl.text('description', 255).notNullable()
            tbl.text('notes', 128)
            //Completed? true or false required
            tbl.boolean('completed').notNullable().defaultTo(false)
            //FK
            tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
            // tbl.integer('projects_id').unsigned().notNullable().refernces('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
        })
        .createTable('resources_step', tbl => {
            //FK
            tbl.integer('projects_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
            //FK
            tbl.integer('resources_id').unsigned().notNullable().references('id').inTable('resources').onUpdate('CASCADE').onDelete('CASCADE')
            //PK
            tbl.primary(['projects_id', 'resources_id'])
            //table for intermediate so resources can be shared among projects.
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExist('tasks')
        .dropTableIfExist('resources')
        .dropTableIfExist('resources_step')
};
