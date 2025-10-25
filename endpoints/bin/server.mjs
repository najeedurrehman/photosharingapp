import app from "../app.mjs";
import dotenv from "dotenv";
dotenv.config();

import db from "../config/database.mjs";

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log(`SERVER IS LISTENING ON ${port}`);
});