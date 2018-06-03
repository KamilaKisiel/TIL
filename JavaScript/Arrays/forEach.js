const array = [1,3,5,7,9];
const double = [];

const newArray = array.forEach((a) => {
    double.push(a *2); //double was create to store the output of forEach loop
})
console.log(double)
//output [2, 6, 10, 14, 18]
