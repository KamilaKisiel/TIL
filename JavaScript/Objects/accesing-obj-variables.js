let someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    let s = "prop";
    return s + str;
  }
  let someProp = propPrefix("Name");
  console.log(someObj[someProp]); // => John