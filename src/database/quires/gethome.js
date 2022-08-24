const connection = require("../connection")

const test = ()=>{
   return connection.query("select * from books;")
}
module.exports = test;