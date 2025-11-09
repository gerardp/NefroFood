module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};