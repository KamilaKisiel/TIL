const promise = new Promise((resolve, reject) => {
    if(true){
    resolve('Stuf worked');
    } else {
    reject('Error, it broke')
    }
})

promise.then(result => console.log(result)) // Stuf worked

// chaning promises
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2);
})