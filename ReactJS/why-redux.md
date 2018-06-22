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


redux uses architectural pattern called **FLUX**

action -> dispatcher ->store -> view

huge advantage of this approach is "one way data flow"

*digression*

before flux there was **mvc**      - model-view-controller pattern

action -> controller -> models -> views

there are many models which are rendered to the views that can interact with each other and at the end it is hard to kep control over data flow

*end of digression*

redux === this.state

