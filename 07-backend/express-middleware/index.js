const http = require("http");

const express = require("express");
const app = express();

const server = http.createServer(app);

const HOST = "127.0.0.1";
const PORT = 3785;

const morgan = require("morgan");
const logger = morgan("tiny");
const helmet = require("helmet");

app.use(helmet);
app.use(logger);

app.use("*", (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, HOST, () => {
  console.log(`listening ${HOST}: ${PORT}`);
});
