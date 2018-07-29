const script2 = require('./script2');

const a = script2.largeNumber;
const b = 12;
console.log(a +b);

//in terminal:
//Admin@HP MINGW64 ~/TIL/NODE (master)
//$ node script.js
//9

// setTimeout(() => {
//     console.log(a +b);  
// },6000)

// console.log(__dirname); // gives the path for file directory 
