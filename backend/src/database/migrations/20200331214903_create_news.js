exports.up = function(knex) {

    return knex.schema.createTable('news', function(table){
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('subtitle').notNullable();
        table.string('text', [1000]).notNullable();
        table.string('urlImage').notNullable();
        table.string('fontImage').notNullable();
        table.string('fontNews').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('news');
};
