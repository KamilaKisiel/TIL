- The `for` loop runs, starting at the first object in the contacts list.
- If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
- Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.

- If the second if statement fails, No such property is returned.
- If the first if statement fails, the `for` loop continues on to the next object in the contacts list.
- If the firstName parameter isn’t matched by the final contacts object, the `for` loop exits and No such contact is returned.

**Example Run**

- lookUpProfile("Asterix","likes"); runs.
- "Asterix" is matched to the "firstName" key in the first object, so the if statement returns true.
- "likes" is found within the first object, so the second if statement returns true.
- The value of "likes" is returned - "Boars", "Fighting", "Potion".