import app from "../app.mjs";
import sql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const dbSetupconnection = sql.createConnection({
  host: process.env.HOSTNAME,
  port: process.env.DEFAULTPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  user: process.env.USER,
});

dbSetupconnection.connect((err) => {

  if (err) {
    const {message} = err;
    console.error(`DATABASE NOT CONNECTING ERROR MESAGE:- ${message}`);
    process.exit();
  }

  const server = app.listen(process.env.PORT || 3000, () => {
    const { port } = server.address();
    console.log(`SERVER IS LISTENING ON ${port}`);
  });

});