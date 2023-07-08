//example 1:
// const firstName = prompt("لطفا نام خود را وارد نمایید...")
// // console.log("typeof firstName",typeof firstName)
// // const firstname_span = document.getElementById("user_firstName")
// // firstname_span.innerText = firstName

// const inputLength = firstName.length
// console.log(typeof inputLength)
// if(inputLength < 2){
//     console.log("لطفا نام خود را به درستی وارد نمایید.")
// }
// else{
//     console.log(`خوش اومدی به قلبم ${firstName}`)
// }


//example 2:
//example2 -> solution 1 :
const weekdays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  let weekDayNumber = +prompt("شماره روز")
  //weekDayNumber = Number(weekDayNumber)
    if(weekDayNumber === 0){
    console.log("شنبه")
    }
    else if(weekDayNumber === 1){
    console.log("یکشنبه")
    }
    else if(weekDayNumber === 2){
    console.log("دوشنبه")
    }
    else if(weekDayNumber === 3){
    console.log("سه شنبه")
    }
    else if(weekDayNumber === 4){
    console.log("چهارشنبه")
    }
    else if(weekDayNumber === 5){
    console.log("پنجشنبه")
    }
    else if(weekDayNumber === 6){
    console.log("جمعه")
    }
    else{
        const a = weekDayNumber % 7;
        console.log(weekdays[ a ]);
    }

    //example2 -> solution 2 :
    // const a = weekDayNumber % 7;
    // console.log(weekdays[ a  ]);