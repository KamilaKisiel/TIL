### Minifacebook
Inspired by online [Udemy course by Andrei Neagoie](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8670696?start=0)

##### To create minifacebook we need two sets of data: username details and a form of news feed from your friends

__username:__ 
````
let database = [
    {
        username: "Lutek",
        password: "topsecret"
    },
    {
        username: "Bolek",
        password: "123"
    },
    {
        username: "Lolek",
        password: "abracadabra"
    },
    {
        username: "Tola",
        password: "333"
    }
];
````
__news feed:__
````
let newsFeed = [
    {
        username: "Bolek",
        timeline: "Had a great day digging holes on a side of the road"
    },
    {
        username: "Lolek",
        timeline: "Wonder what stardust is made of"
    },
    {
        username: "Tola",
        timeline: "There is no force on this planet which going to make me going back to school!"
    }
];
````
__user validation:__
````
let userNamePrompt = prompt("what's your username?");
let passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (usser === database[0].username && 
    pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePromp, passwordPrompt);
````

After successful login news feed will be displayed in a console otherwise alert will pop up to inform that provided username and password was wrong.

Another approach to user validation with an array of users, using `for` loop:
````
//iterating through database array and validating provided username and password//

function isUserValid(username, password) {
    for (let i=0; i < database.length; i++) {
        if(database[i].username === username 
        && database[i].password === password) {
            return true;
        }
    }
    return false;
}

//if isUserValid function returns true news feed shows up//

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsfeed);
    }else {
        alert("Sorry, wrong username and password!");
    }
}
````

