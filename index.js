import express from "express";
import { log } from "./server.js";
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method}-${req.url}`);
  log(req);
  next();
});

app.get("/", (req, res) => {
  console.log("get request");
  res.send("root1\n");
});

app.get("/secret", (req, res) => {
  console.log("get request");
  res.send("root2\n");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Request received!!!!");
});

app.post("/secret", (req, res) => {
  console.log("get request");
  res.send("Request received again!!!");
});
let port = 8000;
console.log("server started on http://localhost:" + port);
app.listen(port);
