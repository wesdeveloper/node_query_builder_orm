exports.up = knex =>
  knex.schema.createTable("users", table => {
    table
      .uuid("id")
      .notNullable()
      .primary();
    table.string("name").notNullable();
    table.string("cpf").notNullable();
    table.string("password").notNullable();
    table.string("estate").notNullable();
    table.string("phone").notNullable();
    table.string("email").notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.fn.now())
      .notNullable();
  });

exports.down = knex => knex.schema.dropTable("users");
