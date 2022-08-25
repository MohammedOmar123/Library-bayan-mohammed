const fs = require('fs');
const { join } = require('path');

const conn = require('./connection');

const sql = fs.readFileSync(join(__dirname, 'build.sql')).toString();
console.log(sql);
conn.query(sql, (err) => {
  if (err) throw new Error(err);
});
