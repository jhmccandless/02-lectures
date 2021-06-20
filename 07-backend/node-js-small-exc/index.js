"use strict";

//// THIS IS THE BACKEND /////////

// console.log("hello world");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3785;

////// old way....
// const server = http.createServer((req, res) => {
//   const { url } = req; //const url = req.url;
//   console.log(`The URL path is: ${url}`);
//   if (url === "/") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World");
//   } else if (url === "/favicon.ico") {
//     res.statusCode = 200;
//     res.end("");
//   } else {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("This is not the home page");
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//////////// new express way
const express = require("express");
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/favicon.ico", (req, res) => {
  res.send("");
});

app.get("*", (req, res) => {
  res.send("This is not the home page");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
