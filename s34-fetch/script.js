"use strict";
//method1: promise & then
// const getProducts = () => {
//   const query = fetch("https://fakestoreapi.com/products");
//   const products = query
//     .then((result) => {
//       return result.json();
//     })
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
//   return products;
// };
// const products = getProducts().then((result) => {
//   console.log(result);
// });

//method2: async/await
async function getUsers() {
  try {
    const query = await fetch("https://fakestoreapi.com/users");
    const result = await query.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
const users = await getUsers();
console.log(users);

/*
    methods:
    GET: get/read data from server
    POST: create/send
    DELETE: delete
    PUT: update
    PATCH: update

    CRUD: CREATE - READ - UPDATE - DELETE
*/

//login example
try {
  const data = {
    username: "alireza",
    password: "123456",
  };
  const query = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const login_result = await query.json();
  console.log(login_result);
} catch (error) {
  console.log(error.message);
}
