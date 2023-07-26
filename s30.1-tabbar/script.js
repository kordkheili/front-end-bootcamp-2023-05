const headItems = document.querySelectorAll(".tabbar-head-item");
headItems.forEach(function (headItem, index, array) {
  headItem.addEventListener("click", function (event) {
    //component
    const component = event.target.closest(".tabbar-component");

    //head
    const headItemTarget = event.target.getAttribute("data-target");
    const headItems = component.querySelectorAll(".tabbar-head-item");
    headItems.forEach(function (headItem) {
      headItem.classList.remove("active");
    });
    event.target.classList.add("active");

    //body
    const bodyItems = component.querySelectorAll(".tabbar-body-item");
    bodyItems.forEach(function (bodyItem) {
      bodyItem.classList.remove("active");
      const bodyItemTarget = bodyItem.getAttribute("data-target");
      if (headItemTarget === bodyItemTarget) {
        bodyItem.classList.add("active");
      }
    });
  });
});

//===========================================
//NodeList vs HTMLCollection
const container = document.querySelector(".tabbar-head");
const siblings1 = document.querySelectorAll(".tabbar-head-item");
const siblings2 = document.querySelector(".tabbar-head").children;
// console.log(siblings1);
// console.log(siblings2);
document.querySelector("#addtab").addEventListener("click", function (e) {
  const template_container = document.createElement("div");
  template_container.classList.add("tabbar-head-item");
  template_container.innerHTML = "dynamically added tabbar";
  container.append(template_container);
});
