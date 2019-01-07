### Immediately Invoked Function Expression

```
(function () {
  console.log("A cozy nest is ready");
})()
```

IIFE is often used to group related functionality into a single object or `module`. we can group `mixins` into `modules`
```
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
         console.log("Singing to an awesome tune");
      };
    }
  }
})();
```
The advantage of the `module` pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code