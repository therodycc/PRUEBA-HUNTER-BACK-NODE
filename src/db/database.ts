import dbSettings from "./dbSettings";
import pg from "pg";


const pool = new pg.Pool(dbSettings);

const getConnection = async () => {
  return await pool.query("select * FROM movies")
  .then((res)=> console.log("DB connected", res.rows))
  .catch(e => console.log(e) );
};

 export default pool;
