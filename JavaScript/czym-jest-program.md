## what is program (on JS example)?

1) allocate memory
2) parse and execute - read and run commands

in chrome there is a V8 engine that reads the code and changes it into machine executable instructions for the browser

engine consist two parts:
 - memery heap - where memory allocation happens
 - call stack - where code is read snd executed

#### "javascript is a single threaded language that can be non-blocking"

single threaded means that it has only one call stack and it can do only one thing at a time

it leades to `synchronous` programming which means that lines of code are executed in order 1,2,3 - the latter wont's start executing untill first one is not going to finish

*but* as the above statement says it can be non-blocking as well and this is because `javascript run-time environment` which is a part of a browser. part of that environment are web APIs, callback queue and event loop

one of the web API is setTimeout method (others: DOM or AJAX) thanks to which we can get `asynchronous` programm.
so when the engine goes through the code (call stack) and meet setTimeout it triggers `Web API` and relocate that part out from the call stack so it can proceed to the next lines.

after given time (let's say 2 sec) setTimeout is done and goes as a callback to `callback queue`. an `event loop` keeps checking if the call stack is empty and when it is it throws the callback over there to execute the code