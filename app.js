const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
//resave and save removes deprecation warning
const sessionOptions = {
  secret: "thisissecret",
  resave: false,
  saveUninitialized: false,
};

// app.use(cookieParser("thisissecret"));
//using this session middleware, it automatically sends cookie to client that corresponds to some little spot in browser memory.
//as long as I have this cookie, it acts like a ID/key that server will recognize it.
//other user will get different session ID/cookie
app.use(session(sessionOptions));

//anytime in our inc req, we have session property available
app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    //I am adding count to session
    //I can add anything to it and it will be saved in server side memory store/ not DB
    //so it will be reset once we close the app
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`you have viewed this page ${req.session.count} times`);
});

app.get("/register", (req, res) => {
  const { username = "Anonymous" } = req.query;
  //this add username to req.session
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
    //without going to register first, username is undefined as it does not exist.
  const { username } = req.session;
  res.send(`welcome back! ${username}`)
});

app.listen(3000, (req, res) => {
  console.log("listening to 3000");
});
