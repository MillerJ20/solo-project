const { Pool } = require('pg');

const PG_URI = 'postgres://atbgoora:clciyi-GhWkdUBkGCoZYwjpNOE-D7axp@kashin.db.elephantsql.com/atbgoora';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports ={
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}