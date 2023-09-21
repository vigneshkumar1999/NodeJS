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

let sql = `SELECT * FROM track WHERE composer = 'AC/DC'`;

console.log(sql);

// execute commands in serial mode
db.serialize(() => {
  let stmt = db.prepare(sql);
  stmt.each(
    (err, track) => {
      if (err) {
        console.error(err.message);
        return
      }
      if(track.length===0){console.log("No Such record exist")}
      else {console.log(track)};
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('...closed the connection...');
});
