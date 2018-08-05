REST API defines a set of functions which developer can perform request and recive responses via http protocol such as 
`GET` to receive a recource
`POST` to create a resource
`PUT` to change a state or update a recource
`DELETE` to remove a resource

REST API is approach to communications that agree on a set of rules so every one play out nicely

The http request (whole url) is a verb (get, post, put...) and everything after the slash is a noun, for example /profile, /home etc.

REST API's are stateless which means that each calls can be made independently of one another. Each call contains all the data necessary to complete itself successful. The server does not need to keep memorising things.