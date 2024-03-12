const express = require("express");
const app = express();
const port = 3000


app.get("/", (res, req) => {
  res.send({ message: "Hello World!" });
})

app.listen(port, async () => {
  console.log(`🚀 server running on PORT: ${port}`);
});