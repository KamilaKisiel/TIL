//promise that resolves in 4 sec and returns success:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000)
  });

// run promise created above and log success
promise.then(console.log)
// or
promise.then(resp => console.log(resp)) // preffer that one

// making the above examples shorter: 
const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)
  );

// catching error
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// using Promise.all to fetch multiple data at the same time
//logging the output and catching the errors
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url =>
      fetch(url).then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));