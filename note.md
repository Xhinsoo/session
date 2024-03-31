Sessions

npm i express-sessions

Cookies have max size.
There is a limit on how many cookies you can save on browser.
It is not secure to store lot of data client-side(browser) using cookies. However, sessions are server side data store so we can use sessions to store lot of data. Then send the browser a cookie (containing key) that can be used to retrieve the data(unlock the session).

Mechanism
server sends cookie (containing key) to client
client sends the same cookie back to server on every request 
server then uses the key to unlock the data in its data store and send it to client

It also makes http stateful. Persist something from one request to another i.e. which user is currently logged in? what is his username who is logged in and so on.
