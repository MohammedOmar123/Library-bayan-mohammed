// const connection = require('../database/connection');
// const {dbBuild} = require('../testDB.js');
// const getHomePage = require('../database/quires/gethome')
// // const getUsers = require('../database/queries/getData');
// // const addUsers = require('../database/queries/postData');

// test("jest is working", () => {
//   expect(1).toBe(1);
// });

// beforeEach(() => {
//   return dbBuild();
// });

// afterAll(() => {
//   return connection.end();
// });



// test ("get home ",()=>{
//  return getHomePage()
//     .then(data => {
//        expect(data.rows[0].bName).toBe('Master XML');
//     });
// })

// // test("Insert user", () => {
// //   const name = 'test user';
// //   const location = 'test location';
// //   return addUsers(name, location)
// //     .then(data => {
// //       expect(data.rows[0].name).toBe(name);
// //       expect(data.rows[0].location).toBe(location);
// //     })
// // });

// // test("Get home function" ,() => {
// //   const expected =  { id: 1, name: 'farah', location: 'Gaza' };  
// //  return getUsers()
// //     .then(data => {
// //        expect(data.rows[0].name).toBe('farah');
// //     });
// // });