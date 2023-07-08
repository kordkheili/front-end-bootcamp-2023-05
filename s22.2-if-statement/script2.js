const password = prompt("password...")
if(password.length < 6){
    console.log("پسورد ضعیف ")
}
else if(password.length >=6 && password.length <= 10){
    console.log("متوسط")
}
else{
    console.log("قوی")
}