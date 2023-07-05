//example 1
const myTitle = prompt("عنوان را وارد نمایید...");
const myDesc = prompt("توضیحات را وارد نمایید...");
const container = document.getElementById("container");
container.innerHTML = `
    <div class="card" style="background-color: lightcoral;margin:20px;">
        <div class="card-header" style="padding:20px;border:1px solid #000;">
            ${myTitle}
        </div>
        <div class="card-body" style="padding:20px;border:1px solid #000;">
            ${myDesc}
        </div>
    </div>
    `;

//example 2
const spanSelector = document.getElementById("dynamic-firstname");
const user_firstname = prompt("نام خود را وارد نمایید.");
spanSelector.innerHTML = user_firstname;
