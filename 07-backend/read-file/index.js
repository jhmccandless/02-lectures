"use strict";

const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("filename: ", function (filename) {
  readline.close();
  fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.log(error.message);
      return;
    }
    const content = buffer.toString();
    const upperCase = content.toUpperCase();
    console.log(upperCase);
  });
});
