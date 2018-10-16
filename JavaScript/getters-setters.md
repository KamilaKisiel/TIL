### Getter
`Getter` functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

### Setter
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
```
function makeClass() {
  "use strict";
  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}
```