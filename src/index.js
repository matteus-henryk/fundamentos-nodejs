const express = require('express');
const app = express();

//localhost:3333/ignite
app.get("/", (request, response) => {
  return response.json({ messenger: "Hello World!" });
});

//localhost:3333
app.listen(3333);