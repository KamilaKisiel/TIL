let contacts = [
    {
        "firstName": "Donald",
        "lastName": "Duck",
        "number": "0543236543",
        "likes": ["Cars", "Relaxing", "Daisy"]
    },
    {
        "firstName": "Archie",
        "lastName": "Andrews",
        "number": "0994372684",
        "likes": ["Girls", "Sports", "Cars"]
    },
    {
        "firstName": "Calvin",
        "lastName": "Smith",
        "number": "0487345643",
        "likes": ["Hobbes", "Outdoors"]
    },
    {
        "firstName": "Asterix",
        "lastName": "None",
        "number": "unknown",
        "likes": ["Boars", "Fighting", "Potion"]
    }
];

function lookUpProfile(name, prop){
    for (var x = 0; x < contacts.length; x++){
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    }
    
    lookUpProfile("Asterix", "likes"); // => ["Boars", "Fighting", "Potion"]