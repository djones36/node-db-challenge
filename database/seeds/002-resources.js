
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Computer', description: 'macbook' },
        { name: 'Textbook', description: 'math book' },
        { name: 'Money' },
        { name: 'Rapid Tax', description: 'accounting software' },
        { name: 'Statements', description: 'bank statements' },
        { name: 'Paper' },
      ]);
    });
};
