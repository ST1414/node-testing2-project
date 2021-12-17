
exports.up = async function(knex) {
    
    await knex.schema.createTable('cars', table => {
        table.increments('car_id');

        table.text('make')
            .notNullable()

        table.text('model')
            .notNullable();

        table.integer('year')
            .notNullable();

        table.text('comments')

    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
};
