import mySql from "mysql";

const DataBase = mySql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "practice_db",
});
try {
  DataBase.connect();
  console.log(`Db-Connected`);
} catch (error) {
  console.log(error);
}

export default DataBase;
