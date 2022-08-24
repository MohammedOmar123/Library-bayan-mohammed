const { getAllBooks  } = require('../database/quires/books');
const { join }= require('path')
const getDataBooks = (req,res)=>{
  getAllBooks()
    .then((data) => {
      res.json(data.rows);
    });

}
module.exports= {getDataBooks }