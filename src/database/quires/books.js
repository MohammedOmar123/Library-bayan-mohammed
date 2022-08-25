const connection = require('../connection');

const getAllBooks = () => connection.query(' SELECT books.id , books.bName , books.img , categories.cName  from books join categories on(books.category_id= categories.id);');

const postBook = (name, imgUrl, id) => connection.query({
  text: 'INSERT INTO books (bName, img, category_id) VALUES ($1, $2, $3);',
  values: [name, imgUrl, id],
});
const updateBook = (id, bookName, img, categoryName) => connection.query({
  text: 'update books set bName = $1 ,img = $2 , category_id = $3 where id = $4 ;',
  values: [bookName, img, categoryName, id],
});


const postBook =(name ,imgUrl , id) =>
     connection.query({
        text: 'INSERT INTO books (bName, img, category_id) VALUES ($1, $2, $3) returning *;',
        values: [name, imgUrl, id],
      });


module.exports ={ getAllBooks , postBook }
const deleteBook = (id) => connection.query(`DELETE FROM books WHERE id ='${id}'`);
module.exports = {
  getAllBooks, postBook, deleteBook, updateBook,
};

