const express = require("express");
const app = express();
const fs = require("fs");
var stringify = require("json-stringify-safe");

app.get("/nodecallback", (req, res) => {
  var datetime = new Date();
  const log = "\n\n" + datetime;
  fs.appendFile("log.txt", log, () => {
    console.log("\n\n---\n" + datetime);
    console.log("log.txt updated!");
  });
  fs.writeFile("lastRequest.txt", stringify(req, null, 2), () => {
    console.log("lastRequest.txt updated!");
  });

  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Randomfy node api listening on port 3000!");
});
