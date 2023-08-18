// const video_el = document.querySelector(".bg-video");

// window.addEventListener("resize", (e) => {
//   videoHandler();
// });
// function videoHandler() {
//   const width = window.innerWidth;
//   if (width > 888) {
//     video_el.style.width = "100%";
//     video_el.style.height = "auto";
//   } else {
//     video_el.style.width = "auto";
//     video_el.style.height = "100%";
//   }
// }
// videoHandler();


const openSearchBtn = document.getElementById("open-search-box");
const closeSearchBtn = document.getElementById("close-search-box");
const searchBox = document.getElementById("header-search-box");
const searchBoxInput = document.querySelector("#header-search-box input[type='text']");
openSearchBtn.addEventListener("click",()=>{
    searchBox.classList.add("active")
    searchBoxInput.focus()
})
closeSearchBtn.addEventListener("click",()=>{
    searchBox.classList.remove("active")
})