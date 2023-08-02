"use strict";
try {
  console.log("log1");
  a = 200;
  console.log("log2");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally log...");
}
console.log("log3");
