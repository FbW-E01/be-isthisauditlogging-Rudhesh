import { Low, JSONFile } from "lowdb";

const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

db.read();

db.data = db.data || { entries: [] };
export function log(req) {
  const database = new Date();

  db.data.entries.push(database.toISOString());

  console.log(db.data.entries);

  db.write();
}
