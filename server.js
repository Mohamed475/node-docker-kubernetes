const express = require("express");
const os = require("os");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Visit http://localhost:${port}`);
  console.log(`hostname: ${os.hostname()}`);
});
