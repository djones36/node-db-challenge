
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Homework', descriptions: 'Do math assigment 3', completed: false },
        { name: 'Taxes', descriptions: 'File 2019 taxes', completed: false },
        { name: 'Project Alpha', descriptions: 'The creation of a new business', completed: false },
      ]);
    });
};
