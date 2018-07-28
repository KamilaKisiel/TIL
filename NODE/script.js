const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 5;
console.log(a +b);

//in terminal:
//Admin@HP MINGW64 ~/TIL/NODE (master)
//$ node script.js
//9

// setTimeout(() => {
//     console.log(a +b);  
// },6000)

// console.log(__dirname); // gives the path for file directory 
