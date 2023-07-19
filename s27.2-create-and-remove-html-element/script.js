const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

const user_list_element = document.getElementById("user-list");
users.forEach(function (user, index, array) {
  const card_element = document.createElement("div");
  card_element.setAttribute("class", "user-card col");
  card_element.innerHTML = `
  <div class="card">
    <div class="card-image">
      <img
        src="${user.avatar}"
        class="card-img-top"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
      <p class="card-text">${user.email}</p>
    </div>
  </div>
  `;
  user_list_element.append(card_element);
});
