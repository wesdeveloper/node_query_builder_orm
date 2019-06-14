exports.up = knex =>
  knex.schema.createTable("posts", table => {
    table
      .uuid("id")
      .notNullable()
      .primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.uuid("user_id").notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    table.foreign("user_id").references("users.id");
  });

exports.down = knex => knex.schema.dropTable("posts");
