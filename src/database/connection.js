const { Pool } = require('pg');
require('env2')('.env');

const dbUrl = process.env.DEV_DB_URL;

const {
  NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database is found !');
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
});

module.exports = connection;
