
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources_step')
    .then(function () {
      // Inserts seed entries
      return knex('resources_step').insert([
        { projecct_id: 1, resource_id: '1' },
        { projecct_id: 1, resource_id: '2' },
        { projecct_id: 1, resource_id: '6' },
        { projecct_id: 2, resource_id: '1' },
        { projecct_id: 2, resource_id: '3' },
        { projecct_id: 2, resource_id: '4' },
        { projecct_id: 2, resource_id: '5' },
        { projecct_id: 3, resource_id: '1' },
        { projecct_id: 2, resource_id: '3' },
        { projecct_id: 2, resource_id: '4' },
        { projecct_id: 2, resource_id: '6' },
      ]);
    });
};
