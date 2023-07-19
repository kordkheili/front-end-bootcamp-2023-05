const circle_element = document.createElement("div");
/*
bad solution
circle_element.setAttribute(
  "style",
  "width: 200px;height: 200px;background-color: red;border-radius: 50%;"
); */

//better solution
/* circle_element.style.width = "200px";
circle_element.style.height = "200px";
circle_element.style.backgroundColor = "red";
circle_element.style.borderRadius = "50%";
 */

//best solution
circle_element.classList.add("circle");

document.body.append(circle_element);

//another example
const music_player_element = document.getElementById("music-player");
music_player_element.classList.add("circle");
music_player_element.classList.remove("container", "box", "d-flex");
const result = music_player_element.classList.contains("col-md-12");
console.log(result);
