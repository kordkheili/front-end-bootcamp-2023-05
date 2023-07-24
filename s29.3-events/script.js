const disableLinks = document.querySelectorAll(".disable-link");
/* disableLinks[0].addEventListener("click", function (event) {
  event.preventDefault();
});
console.log(disableLinks); */

disableLinks.forEach(function (disableLink) {
  disableLink.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
