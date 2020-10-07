
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.integer('VIN').notNullable().index();
    tbl.string('Make', 52).notNullable().index();
    tbl.string('Model', 52).notNullable();
    tbl.integer('Mileage').notNullable();

    tbl.string('Transmission', 52);
    tbl.string('Title Status', 52);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
