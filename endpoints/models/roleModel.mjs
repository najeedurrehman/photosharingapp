import db from "../config/database.mjs";

/* FETCH ALL ROLES */
const getAllRoles = () => {
  db.query("SELECT * FROM ROLES", (err, result, fields) => {
    const [rows] = result;
    console.log(result);
    return result;
  });
};
export default getAllRoles;
