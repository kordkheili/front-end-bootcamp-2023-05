const my_js_tag = document.createElement("a");
my_js_tag.innerHTML = "<b>google.com</b>";
my_js_tag.setAttribute("href", "https://google.com");
my_js_tag.setAttribute("href", "https://yahoo.com");
my_js_tag.setAttribute("alireza", "true");
my_js_tag.setAttribute("class", "box2");

document.getElementById("test").removeAttribute("id");
document.getElementById("test")?.setAttribute("id", "test2");

const another_link_href_value = document
  .querySelector("#another-link")
  .getAttribute("href");

console.log(another_link_href_value);

document.querySelector(".box").remove();

document.body.prepend(my_js_tag);
