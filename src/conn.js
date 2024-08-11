const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db",
});

// var query = "SELECT * FROM notes";

// conection.connect();
// conection.query(query, (err, result) => {
//   if (err) throw err;
//   console.log(JSON.parse(JSON.stringify(result)));
// });

// conection.end();

module.exports = conection;
