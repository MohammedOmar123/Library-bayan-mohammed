
const {Pool}= require('pg')

require('env2')('.env');
const url =  process.env.DB_URL
if (!url) throw new Error('Environment variable DB_URL must be set');

const connection = new Pool ({
    connectionString : url,
    // ssl: {         rejectUnauthorized: false       }
    ssl: false
}) 

module.exports = connection;