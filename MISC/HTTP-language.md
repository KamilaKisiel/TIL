### HTTP "language" consists words, like:

`GET` - get HTML file (receive tweeter feed)

`POST` - post some data on the server (create new user)

`PUT` - update some data with new information (edit some tweet)

`DELETE` - delete some data (delete the tweet)

### to communicate with servers. this words are used for **requests**.

### **responses** from server looks a bit diffrent. it says to me, it says to.. it says... for:
INFORMATION 1xx;

SUCCESS 1xx;

REDIRECTION 3XX;

CLIENT ERROR 4XX;

SERVER ERROR 5XX
### they are status codes


- one way of sending data to the servers is trough **query strings** parameters(not very safe). you can do that by adding method to the form
`<form method='GET'>.....</form>` and everything typed into form will be send in query selectors available in url address and also in network tab in dev-tools

- second way of sending data is trough the **body of the request** by adding `POST` method to the form `<form method='POST'>.....</form>`. still data are seen in dev tools

### HTTPS - secured protocol which uses transport leyer security(TLS) or secure socets leyer(SSL)
