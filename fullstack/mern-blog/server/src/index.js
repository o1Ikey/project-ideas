import express from "express";

const app = express();

const port = 4000;

const hostName = "localhost";

app.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}/`);
});
