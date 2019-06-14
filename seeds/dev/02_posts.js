const uuid = require("uuid/v4");

exports.seed = knex =>
  // Deletes ALL existing entries
  knex("posts")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("posts").insert([
        {
          id: "0a0f5633-8ad9-4a65-a84f-a943a9c13705",
          title: "KnexJs",
          description:
            'Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.',
          user_id: "ab79a07d-cd8c-43db-9ff4-aebdb6b52c97"
        },
        {
          id: "439caded-2251-4725-b595-a7d253864fed",
          title: "Bookshelfjs",
          description:
            "The Bookshelf library is initialized by passing an initialized Knex client instance. The knex documentation provides a number of examples for different databases.",
          user_id: "b8d48193-4084-400d-87fd-5559c12be626"
        },
        {
          id: "9421490a-98ad-4d5d-b100-d684670ae83b",
          title: "Node",
          description:
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          user_id: "b8d48193-4084-400d-87fd-5559c12be626"
        }
      ])
    );
