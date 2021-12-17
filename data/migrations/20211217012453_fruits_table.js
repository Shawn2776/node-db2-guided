
exports.up = function(knex) {
    return knex.schema.createTable("fruits",tbl=>{
        tbl.increments() //primary key
        tbl.text("name",128).unique().notNullable()
    })
};

exports.down = function(knex) {
  
};