"use strict";
// const a = 200;
// const x = 560;
// console.log(a);
// alert("test");
// alert("test2");
// alert(a);
// const y = 700;
// alert(y);
// console.log(x);
let users = ["alireza", "mohamadreza"];
// function addUser(username) {
//   setTimeout(function () {
//     users.push(username);
//   }, 1000);
// }
// addUser("user1");
// addUser("user2");
// addUser("user3");
// console.log(users);

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    users.push("user1");
    resolve("به قولم عمل کردم");
    //reject("عمل نکردم");
  }, 1000);
});
myPromise
  .then(function (result) {
    console.log(users);
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally...");
  });

function addUserPromise(username) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      users.push(username);
      resolve("به قولم عمل کردم");
    }, 1000);
  });
}
const addUserReza = addUserPromise("reza");
addUserReza
  .then((result) => {
    console.log(result);
    console.log(users);
    return "salam";
  })
  .then((result) => {
    console.log(result);
    return "khodafez";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally......");
  });

//callback hell
/* addUserPromise("user100").then((result) => {
  addUserPromise("user101").then((result) => {
    addUserPromise("user102").then((result) => {
      addUserPromise("user103").then((result) => {
        addUserPromise("user104").then((result) => {
          addUserPromise("user105").then((result) => {
            console.log(users);
          });
        });
      });
    });
  });
}); */

// better solution
/* addUserPromise("user100")
  .then((result) => {
    return addUserPromise("user101");
  })
  .then((result) => {
    return addUserPromise("user102");
  })
  .then((result) => {
    return addUserPromise("user103");
  })
  .then((result) => {
    return addUserPromise("user104");
  })
  .then((result) => {
    return addUserPromise("user105");
  })
  .finally(() => {
    console.log(users);
  });
 */

/* async function addUsers() {
  await addUserPromise("user200");
  await addUserPromise("user201");
  await addUserPromise("user202");
  console.log(users);
}
addUsers(); */
