
const {Pool}= require('pg')

require('env2')('.env');
const url =  process.env.DEV_DB_URL
if (!url) throw new Error('Environment variable DB_URL must be set');

// const {NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL} = process.env;
// let dbUrl = "";

// switch(NODE_ENV) {
//     case 'production':
//         dbUrl = DB_URL;
//     break;
//     case 'development':
//         dbUrl = DEV_DB_URL;
//     break;
//     case 'test':
//         dbUrl = TEST_DB_URL;
//     break;
//     default:
//         throw new Error('No Database is found !');
// }
const connection = new Pool ({
    connectionString :  url,//dbUrl,
    // ssl: {         rejectUnauthorized: false       }
    ssl: false,
}) 

module.exports = connection;