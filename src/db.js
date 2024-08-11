const conection = require("./conn");

const get = (query) => {
  conection.connect();
  conection.query(query, (err, result) => {
    if (err) throw err;
    return result;
  });
};

const data = {
  id: 4,
  title: "Judul Coba",
  tags: "Coba",
  body: "Coba body",
  createdAt: "smkjadn",
  updatedAt: "jdnnasd",
};

const sql = "INSERT INTO notes SET ?";

const create = (sql, data) => {
  conection.connect;
  conection.query(sql, data, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      //   throw err;
    } else {
      console.log(result.affectedRows);
    }
  });
  conection.end();
};

// create(sql, data);
