`updateRecords` function first checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
If that first check doesn’t pass, it next checks only if value isn’t a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.

**Example Run**

- (5439, "artist", "ABBA"); runs.
- prop is equal to “artist”, not “tracks”, so the first part of the else if statement fails.
- value is not a blank string, so the second part of the else if statement passes.
- artist: "ABBA" is added to the 5439 id.