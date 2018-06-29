ajax(Asynchronous JavaScript and XML) - alows to read from server after the page has loaded and update the page without reloading it; send data in the background while user is inteacting with the website

to download data from server we use `fetch` method
```
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
    })
```