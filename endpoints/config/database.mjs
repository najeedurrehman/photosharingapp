import sql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = sql.createConnection({
  host: process.env.HOSTNAME,
  port: process.env.DEFAULTPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  user: process.env.USER,
});

db.connect((err) => {
  if (err) {
    const { message } = err;
    console.error(`DATABASE NOT CONNECTING ERROR MESAGE:- ${message}`);
    process.exit();
  }
  //console.log('DATBASE CONNECTED SUCCESSFULLY.');
});

export default db;