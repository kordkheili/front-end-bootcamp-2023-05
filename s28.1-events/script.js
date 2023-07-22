const btnElement = document.getElementById("btn");
btnElement.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);
  event.target.innerHTML = "test";
  //alert("you clicked on btn");
});

btnElement.addEventListener("mouseenter", function (event) {
  console.log("mouseenter", event);
});
btnElement.addEventListener("mouseover", function (event) {
  console.log("mouseover", event);
});

btnElement.addEventListener("mouseleave", function (event) {
  console.log("mouseleave", event);
});

btnElement.addEventListener("dblclick", function (event) {
  console.log("dblclick", event);
});

const firstname_el = document.getElementById("firstname");
const firstname_print_el = document.getElementById("firstname_print");
firstname_el.addEventListener("keyup", function (event) {
  const input_value = event.target.value;
  firstname_print_el.innerHTML = input_value;
});

function log_array(myarray) {
  console.log(myarray);
}
const array1 = [1, 2, 5, 2];
log_array(array1);
