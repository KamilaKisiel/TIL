//references type
let obj1 = {value: 10}; //this is just storing a referense of where a value of 10 is kept and that is obj1, like the address

let obj2 = obj1; // obj2 keeps the information of whatever it is in obj1; it doesn't overight what's in obj1

let obj3 = {value:10}; //a new 'box' with new reference

//what'll comes out if we compare those objects?

obj1 === obj2 //gives true, because it compares the same 'address' of where value is kept
obj1 === obj3 //gives false, thta's comparing two different 'boxes' and we can't know what's inside

//context (this) !!!!!
//simply speaking everything that is on the left from the 'dot'
let obj4 = {
    a: function () {
        console.log(this);
    }
}

obj4.a() //is the same as this.a()


//instantiation - make copy of an object an reuse the code
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}
class Wizard extends Player { // so wizard will have everything that's inside player, and his own method 'play'
    constructor(name, type) {
        super(name, type) //it's a reference to the constructor above
    }
    play() {
        console.log(`Weeee I am ${This.type}`);
    }
}

const wizard1 = new Wizard('Lolek', 'Healer');
const wizard2 = new Wizard('Bolek', 'Dark magic');
