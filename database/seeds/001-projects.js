
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Homework', description: 'Do math assigment 3', completed: false },
        { name: 'Taxes', description: 'File 2019 taxes', completed: false },
        { name: 'Project Alpha', description: 'The creation of a new business', completed: false },
      ]);
    });
};