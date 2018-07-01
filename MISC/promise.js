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

// .catch

promise
    .then(result => {
        throw Error
        return result + '!'
    })
    .then(result2 => {
        console.log(result2);
})
.catch(() => console.log('error!'))
//.catch loges the error no matter 
//where it happens in the chain of promise