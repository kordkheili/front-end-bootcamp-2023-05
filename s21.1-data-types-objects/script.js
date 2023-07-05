// object
const user1 = {
  firstname: "alireza",
  lastname: "mohamadi",
  isMale: true,
  confirmed: false,
  alayegh: ["football", "music", "programming"],
};
const user2 = {
  firstname: "maryam",
  lastname: "rezaie",
  isMale: false,
  confirmed: true,
  alayegh: [],
  "test-prop": "some value...",
};
console.log(user1);
console.log(user2);
console.log(user1.firstname);
console.log(user1["firstname"]);
console.log(user1["test-prop"]);
console.log(user1.alayegh);
