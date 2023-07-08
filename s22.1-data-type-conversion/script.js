let a = 5;
let b = a++;
console.log(a)
console.log(b)

a += 10; //a = a + 10;
a -= 10; //a = a - 10;
a **= 10; //a = a ** 10;
a /= 10; //a = a / 10;
console.log(a)

const x = "200";
const y = "300";
const z = "alireza";
console.log( x + y )
// console.log( Number(x) + Number(y) )
console.log( +x + +y )
console.log(Number(z))

const num1 = 09203302808;
console.log(num1)
console.log("0" + String(num1))

const bool1 = 1;
const bool2 = 0;
console.log(bool1)
console.log(bool2)
console.log(Boolean(bool1))
console.log(Boolean(bool2))

console.log(parseInt("4363.346ali"))
console.log(parseFloat("4363.346ali"))

const u = 685;
console.log(u.toString())

const pi = Math.PI
console.log(+pi.toFixed(3))


// 5 falsy values in js
console.log(Boolean("")) //output: false
console.log(Boolean(null)) //output: false
console.log(Boolean(undefined)) //output: false
console.log(Boolean(NaN)) //output: false
console.log(Boolean(0)) //output: false

//all others are true
console.log(Boolean("5745")) //output: true
console.log(Boolean(3463)) //output: true
console.log(Boolean("alir")) //output: true