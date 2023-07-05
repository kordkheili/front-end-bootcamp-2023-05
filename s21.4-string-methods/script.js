let fullname = "Some Text Here...";
const spamText1 = "1- Salam Man Alireza Hastam      ";
const spamText2 = "        2- Salam Man Alireza Hastam";
const spamText3 = "     3- Salam Man Alireza Hastam      ";
const paragraph =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rerum temporibus nihil nam aperiam laboriosam sunt quas deleniti, sed, vel et fugit. Iure cupiditate eius a numquam, praesentium maiores sint?";
console.log("fullname.length: ", fullname.length);
console.log("fullname.toUpperCase(): ", fullname.toUpperCase());
console.log("fullname.toLowerCase(): ", fullname.toLowerCase());
console.log(fullname.concat("?"));

//trim()
console.log(spamText1);
console.log(spamText1.trimEnd());
console.log(spamText2);
console.log(spamText2.trimStart());
console.log(spamText3);
console.log(spamText3.trim());

//slice(startIndex, endIndex);
console.log(spamText1.slice(10));
console.log(spamText1.slice(3, 10));
const summary = paragraph.slice(0, 60) + "...";
console.log(summary);

//replace(), replaceAll()
console.log(fullname.replaceAll(" ", "*"));
console.log(fullname.replace(" ", "*"));

//split()
fullname = fullname.split(" ");
console.log("fullname", fullname);

//chatAt()
console.log(spamText1.charAt(10));

//substring()
