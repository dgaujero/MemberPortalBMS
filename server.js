//DONE

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = require("./controller/checkIn");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});

