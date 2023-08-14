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
