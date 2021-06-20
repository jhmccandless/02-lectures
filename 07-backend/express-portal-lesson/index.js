"use strict";

///////// backend /////////////

const http = require("http");

const hostname = "127.0.0.1";
const port = 3785;

const express = require("express");
const app = express();

const server = http.createServer(app);
const db = require("./db.js");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/friends", (req, res) => {
  const eachFreind = db.friends
    .map((el) => `<li><a href="/friends/${el.handle}">${el.name}</a></li>`)
    .join(" ");
  res.send(`<ul>${eachFreind}</ul>`);
});

app.get("/friends/:handle", (req, res) => {
  //   console.log(req.params);
  const { handle } = req.params;
  const friend = db.friends.find((el) => el.handle === handle);
  if (friend) {
    let htmlData = ``;
    htmlData += `<h1>${friend.name}</h1>`;
    htmlData += `<h3>${friend.handle}</h1>`;
    htmlData += `<h3>${friend.skill}</h1>`;
    res.send(htmlData);
  } else {
    res.status(404).send(`no friend with handle ${handle}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
