function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let myRandom = randomRange(5,15) // => ...any random number between 5 and 15