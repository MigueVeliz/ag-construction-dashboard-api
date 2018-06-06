const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || 'postgres://angel@localhost:5432/ag-construction');

module.exports = db;