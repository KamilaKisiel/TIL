### why redux?

* good for managing large state
* useful for sharing data between containers
* predictable state management using the 3 principles:

1.  single source of truth
2. state is read only
3. changes using pure functions

sequence of events:

action -> reducer -> store -> make changes

**action** is s-thing that user does, like clicking on a button or dropdown menu. and action goeas through...

**reducer** is pure function that receives an input, that is the action and creates an output, which is the state or a we call it in redux...

**store** is entire state of the app, which is updated by the action

and react notices state change **makes changes** to the view layer
