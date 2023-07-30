//downwards
const blue_btn = document.querySelectorAll(".btn.btn-primary.my-2");
console.log(blue_btn);
const container_element = document.querySelector("section.container");
console.log("container_element", container_element);
const allPTags = container_element.querySelectorAll("p");
console.log(allPTags);
const allSpans = allPTags[0].querySelectorAll("span");
console.log(allSpans);

console.log("container_element.children()", container_element.children);

//upwards
console.log(container_element.parentElement);

const vip_btn = document.getElementById("vip_btn");
console.log(vip_btn.closest("div.col"));

//sideways
console.log(container_element.nextElementSibling.children);
console.log(container_element.previousElementSibling);
