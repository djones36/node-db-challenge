
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'Hire accountat', notes: 'the cheapest one', completed: false, project_id: 2 },
        { description: 'Buy a textbook', notes: 'the math book from class', completed: true, project_id: 1 },
        { description: 'Hide money', notes: 'smuggle cash to swish bank', completed: false, project_id: 2 },
        { description: 'Purchase rapid tax', completed: true, project_id: 2 },
        { description: 'Hire tutor', notes: 'the smartest one', completed: false, project_id: 1 },
        { description: 'Business license', completed: true, project_id: 3 },
        { description: 'Create Name', notes: 'Alpha biz', completed: true, project_id: 3 },
        { description: 'Buy paper', notes: 'the fancy kind', completed: false, project_id: 3 },
      ]);
    });
};
