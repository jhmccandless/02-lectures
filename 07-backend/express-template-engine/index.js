const http = require("http");

const hostname = "127.0.0.1";
const port = 3785;

const express = require("express");
const app = express();

const db = require("./db.js");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.render("home", {
    locals: {
      title: "Address Book App",
    },
    partials: {
      head: "/partials/head",
    },
  });
});

app.get("/friends", (req, res) => {
  res.render("friends-list", {
    locals: { title: "Friends list", friends: db.friends, path: req.path },
    partials: {
      head: "/partials/head",
    },
  });
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const friend = db.friends.find((el) => el.handle === handle);
  if (friend) {
    res.render("friend", {
      locals: {
        title: `${friend.name}'s info`,
        friend,
      },
      partials: {
        head: "/partials/head",
      },
    });
  } else {
    res.status(404).send(`no friend with handle ${handle}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`listeing on ${hostname}: ${port}`);
});
