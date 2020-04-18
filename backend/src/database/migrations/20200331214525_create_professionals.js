exports.up = function(knex) {

    return knex.schema.createTable('professionals', function(table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('birthDate').notNullable();
        table.integer('number').notNullable();
        table.string('country').notNullable();
        table.string('teams').notNullable();
        table.string('urlPicture').notNullable();
        table.string('urlInstagram').notNullable();
        table.enu('type', ['goleiro', 'zagueiro', 'meia', 'atacante', 'tecnico']).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('professionals');
};
