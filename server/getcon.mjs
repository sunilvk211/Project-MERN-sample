import { MongoClient } from "mongodb";
require('dotenv').config();
const connectionString = process.env.MongoDB_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(err) {
  console.error(err);
}

let db = conn.db("mern");

export default db;