//converting promise into async await:
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStarships() {
    const response = await fetch('https://swapi.co/api/starships/9/')
    const data = await response.json();
    console.log(data);
}  