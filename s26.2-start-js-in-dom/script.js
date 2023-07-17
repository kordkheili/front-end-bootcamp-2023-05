// window.alert("test alert");
// window.console.log("test console");

//getElementById()
const element = document.getElementById("box");
console.log(element);

//getElementsByClassName()
const element2 = document.getElementsByClassName("container");
console.log(element2[5]);

//getElementsByTagName
const element3 = document.getElementsByTagName("div");
console.log(element3);

//getElementsByName
const element4 = document.getElementsByName("firstname");
console.log(element4);

//querySelector
const element5 = document.querySelector(".container");
const element6 = document.querySelector("#box");
console.log(element5);
console.log(element6);

//querySelectorAll
const element7 = document.querySelectorAll(".container");
const element8 = document.querySelectorAll("#box");
console.log(element7);
console.log(element8);

//
const li_elements = document.querySelectorAll("li");
console.log(li_elements);
