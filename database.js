const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./messages.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database');
  
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;