const uuid = require("uuid/v4");

exports.seed = knex =>
  // Deletes ALL existing entries
  knex("users")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("users").insert([
        {
          id: uuid(),
          name: "Sebastião Rodrigo da Mota",
          cpf: "05035160408",
          password: "7JBG1DhIFk",
          estate: "MG",
          email: "sebastiaorodrigodamota-79@soespodonto.com.br",
          phone: "33983579885"
        },
        {
          id: uuid(),
          name: "Bernardo Caio Sales",
          cpf: "52300298708",
          password: "fRgzWkFQc2",
          estate: "SP",
          email: "bernardocaiosales_@gripoantonin.com",
          phone: "11996292472"
        },
        {
          id: uuid(),
          name: "Allana Nicole Brito",
          cpf: "96926164444",
          password: "5At0MYAzyb",
          estate: "TO",
          email: "allananicolebrito__allananicolebrito@technew.ind.br",
          phone: "63998132500"
        },
        {
          id: "ab79a07d-cd8c-43db-9ff4-aebdb6b52c97",
          name: "Valentina Fátima Maya Pereira",
          cpf: "40253514630",
          password: "TIU2RwfWM2",
          estate: "TO",
          email:
            "valentinafatimamayapereira..valentinafatimamayapereira@hotmmail.com",
          phone: "63985619059"
        },
        {
          id: "9087fb5c-cf35-47dd-9e3e-12cfc3d9a661",
          name: "Maria Allana Vieira",
          cpf: "03464370321",
          password: "WU9yAeMsjj",
          estate: "RR",
          email: "mmariaallanavieira@maiamaquinas.com.br",
          phone: "95988195436"
        },
        {
          id: "b8d48193-4084-400d-87fd-5559c12be626",
          name: "Calebe Severino da Mata",
          cpf: "36856399006",
          password: "P01nxwpGBq",
          estate: "SC",
          email: "ccalebeseverinodamata@embraer.com.br",
          phone: "47993495432"
        }
      ])
    );
