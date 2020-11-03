module.exports = {
  development: {
    username: "api_user",
    password: "psw",
    database: "books_development",
    host: "127.0.0.1",
    dialect: "postgres",
    operationAliases: false,
  },
  test: {
    username: "api_user",
    password: "psw",
    database: "books_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operationAliases: false,
    logging: false,
  },
};
