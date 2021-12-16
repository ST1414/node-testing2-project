
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate();
  await knex('cars').insert([
    {
      make: 'Subaru',
      model: "Forester",
      year: '2016'
    },
    {
      make: 'Subaru',
      model: "Impreza STI",
      year: '2008'
    },
    {
      make: 'Subaru',
      model: "Impreza WRX",
      year: '2004'
    },
    {
      make: 'Volvo',
      model: "Amazon",
      year: '1968'
    },
  ])


};
