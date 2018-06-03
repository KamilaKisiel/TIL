const array = [1, 2, 10, 16, 19];

//to multiply each number in array we can use forEach loop
//but we need to create a new array and push the result in it
//const double = [];
// const newArray = array.forEach((a) => {
//     double.push(a *2); //double was create to store the output of forEach loop
// })
// console.log(double)
//to avoid that we can use `map` method

//MAP
//1)
const mapArray = array.map((a) => {
    return a * 2; //remember to `return'!!
});
console.log(mapArray);
//map has a restriction on the operation - it expects the operation to 
//'return' and stores whatever comes out in new array

//2)


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

//advanced examples on the given array:
const animals = [

    {
        "name": "cat",
        "size": "small",
        "weight": 5,
        "items": ["claws", "whiskers"]
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10,
        "items": ["bark", "nose"]
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150,
        "items": ["mane", "roar"]
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000,
        "items": ["trunk", "ears"]
    }
]
//forEach loop to create array with animal names with '!'
let newArray = [];
animals.forEach(animal => {
    let { name } = animal;
    name = name + "!";
    newArray.push(name);
})
console.log(newArray);

//map method to put '?' after each animal name
const mapArray = animals.map(animal => {
	let { name } = animal;
	return name + "?";
})
console.log(mapArray);

//filter array to only show small animals
const filterArray = animals.filter(animal => {
	return animal.size === "small";
})
console.log(filterArray);

//using reduce find total weight of animals
const total = animals.reduce((acc, animal) => {
	return acc + animal.weight
}, 0);
console.log(total);

//add '!' to the end of each item
const animalItems = animals.map(animal => {
	animal.items = animal.items.map(item => {
		return item + "!"
	});
	return animal;
})
console.log(animalItems);