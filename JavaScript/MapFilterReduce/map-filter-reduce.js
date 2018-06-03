const array = [1, 2, 10, 16];

//to multiply each number in array we can use forEach loop
//but we need to create a new array and push the result in it
//const double = [];
// const newArray = array.forEach((a) => {
//     double.push(a *2); //double was create to store the output of forEach loop
// })
// console.log(double)
//to avoid that we can use `map` method

//MAP

const mapArray = array.map((a) => {
    return a * 2; //remember to `return'!!
});
console.log(mapArray);
//map has a restriction on the operation - it expects the operation to 
//'return' and stores whatever comes out in new array


//digression-shorthand for singleargument arrow function
const mapArray = array.map(a => a * 2);
console.log(mapArray);

//FILTER

const filterArray = array.filter(a => a > 5);

console.log(filterArray);

//REDUCE

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
//we begin from 0 and add up next numbers in array