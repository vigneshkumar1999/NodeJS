const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database(
  '../data/Chinook.db',
  sqlite3.OPEN_READWRITE, // notice we are opening the database in read-write mode
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('...connected to Chinook...');
  });

// execute commands in serial mode
db.serialize(() => {
  //   console.log("Tables in the Chinook database:");
  db.each(
    `SELECT * FROM sqlite_master WHERE type='table'`,
    (err, table) => {
      if (err) {
        console.error(err.message);
      }
      console.log(table.name);
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('...closed the connection...');
});
