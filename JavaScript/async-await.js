//converting promise into async await:
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStarships() {
    const response = await fetch('https://swapi.co/api/starships/9/')
    const data = await response.json();
    console.log(data);
}  

// updating function so there is no fetch...then fragment
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]
  
  const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  }
  //updated
  const getData = async function(){
      const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
  }