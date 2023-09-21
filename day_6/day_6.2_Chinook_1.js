const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database(
  '../data/Chinook.db',
  sqlite3.OPEN_READONLY, // open db in read-only mode
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('...connected to Chinook...');
  });

// prepare statements
let composer = "AC/DC";

let sql = `SELECT * FROM track WHERE composer = '${composer}'`;     //add ' ' around ${composer} will get ans

console.log(sql);

// execute commands in serial mode
db.serialize(() => {
  db.each(
    sql,
    (err, track) => {
      if (err) {
        console.error(err.message);
      }
      console.log(track);
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('...closed the connection...');
});
