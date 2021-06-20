"use strict";

const http = require("http");

const express = require("express");
const app = express();

const server = http.createServer(app);
const db2 = require("./db2.js");

const hostname = "127.0.0.1";
const port = 3785;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/cats", (req, res) => {
  res.send("meoooooow😸");
});

app.get("/dog", (req, res) => {
  res.send("barkkkk 🐶");
});

app.get("/cats_and_dogs", (req, res) => {
  res.send("AAAAAAAAAAHHHHHHHH");
});

app.get("/greet/:handle", (req, res) => {
  const { handle } = req.params;
  res.send(`<h1>Hello, ${handle}</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`this is the server ${hostname}: ${port}`);
});
