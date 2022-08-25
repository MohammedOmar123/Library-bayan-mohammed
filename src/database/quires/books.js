const connection = require('../connection')

const getAllBooks = () => connection.query(' SELECT books.id , books.bName , books.img , categories.cName  from books join categories on(books.category_id= categories.id);');


const postBook =(name ,imgUrl , id) =>
     connection.query({
        text: 'INSERT INTO books (bName, img, category_id) VALUES ($1, $2, $3) returning *;',
        values: [name, imgUrl, id],
      });


module.exports ={ getAllBooks , postBook }