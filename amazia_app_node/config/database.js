const pgp = require('pg-promise')({});

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
};

let db;

if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
} else {
  db = pgp(config);
}

module.exports = db;
