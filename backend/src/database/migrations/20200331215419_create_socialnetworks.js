exports.up = function(knex) {

    return knex.schema.createTable('socialnetworks', function(table){
        table.increments('id').primary();
        table.string('url').notNullable();
        table.enu('type', ['instagram', 'facebook', 'twitter', 'spotify', 'snapchat']).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('socialnetworks');
};
