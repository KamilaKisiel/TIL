let someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    let s = "prop";
    return s + str;
  }
  let someProp = propPrefix("Name");
  console.log(someObj[someProp]); // => John

  
  let testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  let playerNumber = 16;      
  let player = testObj[playerNumber];