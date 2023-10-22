const express = require("express");
const app = express();
app.use(express.json());

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  password: "UGxYwwG72k",
  user: "sql12655330",
  database: "sql12655330",
});

app.listen(30010, () => {
  console.log("ruuner");
});
app.get("/", (request, response) => {
  db.query(`select * from ticket;`, (err, row) => {
    if (err) {
      response.send(err);
    } else {
      response.send(row);
    }
  });
});

app.post("/push/:id", (request, response) => {
  const { id } = request.params;
  db.query(`update ticket set book=1 where id=${id};`, (err, row) => {
    if (err) {
      response.send(err);
    } else {
      response.send("added");
    }
  });
});
