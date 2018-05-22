### Minifacebook
Inspired by online [Udemy course by Andrei Neagoie](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8670696?start=0)

##### To create minifacebook we need two sets of data: username details and a form of news feed from your friends

__username:__ 
````
let database = [
    {
        username: "lutek",
        password: "topsecret"
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
