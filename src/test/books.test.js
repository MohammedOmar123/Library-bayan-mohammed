const connection = require('../database/connection');
const { dbBuild } = require('../database/testDB');
const { getAllCategories, postCategory } = require('../database/quires/categories')
const { getAllBooks , postBook } = require('../database/quires/books')

test("jest is working", () => {
  expect(1).toBe(1);
});

beforeEach(() => {
    return dbBuild();
})

// test('getAllBooks', () => {
//   return getAllBooks()
//     .then((data) => {
//     //   expect(data.rows.length).toBe(4);
//       expect(data.rows[0].id).toBe(1);
//     //   expect(data.rows[0].bName).toBe('Master XML');
//     });
// });
test('getAllCategories', () => {
  return getAllCategories()
    .then((data) => {
      expect(data.rows.length).toBe(3);
      expect(data.rows[0].id).toBe(1);
    });
});
test('postBook', () => {
  const name = 'book30';
  const imgUrl = 'https://books.google.com/books/content?id=MTne6h_chwEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api';
  const category_id = '1';
  return postBook(name, imgUrl, category_id)
    .then((data) => {
      expect(data.rows.length).toBe(1);
      expect(data.rows[0].id).toBe(5);
    });
});
test('postCategory', () => {
  const name = 'book30';
  return postCategory(name)
    .then((data) => {
        expect(data.rows.length).toBe(1);
        expect(data.rows[0].id).toBe(4);
    });
});
afterAll(() => {
  return connection.end();
});