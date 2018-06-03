const array = [1, 2, 10, 16];

//to multiply each number in array we can use forEach loop
//but we need to create a new array and push the result in it
//const double = [];
// const newArray = array.forEach((a) => {
//     double.push(a *2); //double was create to store the output of forEach loop
// })
// console.log(double)
//to avoid that we can use `map` method

const mapArray = array.map((a) => {
    return a * 2; //remember to `return'!!
});
console.log(mapArray);
