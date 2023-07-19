//circle
const circle = document.createElement("div");
circle.style.width = "50px";
circle.style.height = "50px";
circle.style.backgroundColor = "red";
circle.style.borderRadius = "50%";

//square
const square = document.createElement("div");
square.style.width = "200px";
square.style.height = "200px";
square.style.backgroundColor = "green";

//alireza
const name_element = document.createElement("span");
name_element.innerText = "alireza";

//append elements to DOM
document.body.append(square);
square.append(name_element);
square.append(circle);
