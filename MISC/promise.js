const promise = new Promise((resolve, reject) => {
    if(true){
    resolve('Stuf worked');
    } else {
    reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
}) // it will logg all of the results after 5sec 
//cause it waits untill all of the promises resolves


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

/////////////////////////////////////////////

const urls = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})). then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))