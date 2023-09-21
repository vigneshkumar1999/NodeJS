# Day 6

## 8. Express.js - Completion...Some More
Covering the remaining aspects of Express.js like post, put, etc.
- Riya Mehra shared the screen and showed bug fixes.
- Vighneshkumar S shared the screen and showed bug fixes.
- Poojita Gupta shared the screen and showed bug fixes.
- Navya R shared the screen and showed bug fixes.
- Gayathri Maddi shared the screen and showed bug fixes.
- Sharvan shared the screen and showed bug fixes.
- Kirti Goel shared the screen and showed bug fixes.
- Ravi Kumar shared the screen and showed bug fixes.

Key takeways -  
- Need to read about http status codes and be serious about it.
- How do you make sure that the erroe mesages are complete and specific?



`Please share specific questions and queries and we will try to cover them in this session or in Day 7.`

`As we speak, do we see any serious problems with the express.js usage? Please share your thoughts...We should move to next topics and in case some inputs needed on express.js, we can always discuss those as an when required.`

## 10. Database Connectivity
`Provide an overview of database concepts and demonstrate how to connect and interact with databases using Node.js, with a focus on MongoDB or MySQL like db as beginner-friendly options.`

When working with databases in Node.js, there are several important packages that provide a convenient and efficient way to interact with both SQL and NoSQL databases. Let's discuss some of these packages.

### Packages for SQL Databases
- `mysql`: This package allows you to connect to and interact with MySQL databases. It provides methods to execute SQL queries, manage connections, and handle results.
- `pg`: For PostgreSQL databases, this package serves as a PostgreSQL client for Node.js. It enables communication with the database, executing queries, and managing transactions.
- `mssql`: If you're using Microsoft SQL Server, this package provides a native driver for Node.js to connect and interact with SQL Server databases.

### Packages for NoSQL Databases
- `mongoose`: This package is widely used for working with MongoDB, a popular NoSQL database. Mongoose provides an object modeling approach to interact with MongoDB, allowing you to define schemas, perform CRUD operations, and handle relationships between data.
- `cassandra-driver`: For Apache Cassandra, this package provides a powerful and efficient driver to connect, read, and write data to Cassandra databases.
- `redis`: When working with Redis, an in-memory data structure store, this package enables you to interact with Redis databases, perform operations like caching, pub/sub messaging, and store and retrieve key-value pairs.

It's worth mentioning that there are several other packages available depending on the specific database and the requirements you have. Additionally, most databases also have official packages provided by their respective vendors, which are often recommended for optimal performance and compatibility.

When working with any of these packages, it is important to carefully read their documentation and learn about the available functionalities and best practices. 

This will help you to effectively connect to databases, perform operations, handle errors, and optimize your interactions with the database.

The mentioned packages like `mysql`, `pg`, `mssql`, `mongoose`, `cassandra-driver`, and `redis` are important and widely used packages for working with both SQL and NoSQL databases in Node.js.

### Working with a SQLite Database

For the purpose of our discussion today we will work with a `sqlite` database using CLI tool and the Node.js package `sqlite3` to interact with the database. 

`sqlite3` is a package that provides a simple and efficient way to interact with SQLite databases. It is a popular choice for beginners due to its simplicity and ease of use.

Additionally, make note of following important resources -
- Sample databases for sqlite - https://www.sqlitetutorial.net/sqlite-sample-database
- DB Browser tool for for SQLite -  https://sqlitebrowser.org/dl. This is a GUI tool for working with SQLite databases.
- SQLite official documentation - https://www.sqlite.org/docs.html
- Node.js package `sqlite3` documentation - https://www.npmjs.com/package/sqlite3

Let's take a look at how we can use this package to connect to and interact with a SQLite database.

#### Chinook Database
We will be using the database located at `../data/Chinook.db`. This database contains information about a music store, including details about artists, albums, tracks, invoices, and more.

#### Task - List Tables Using SQLite CLI Tool
Let us see what tables are present in the database. We can do this by using the `.tables` command in the sqlite3 shell.

```bash
$ cd day_6
$ sqlite3 ../data/Chinook.db
SQLite version 3.32.3 2020-06-18 14:16:19
Enter ".help" for usage hints.
sqlite> .tables
Album           Employee        InvoiceLine     PlaylistTrack
Artist          Genre           MediaType       Track
Customer        Invoice         Playlist
```

To exit the sqlite3 shell, use the `.exit` command.

```
sqlite> .exit
```

#### Task - List Tables Using sqlite3 Node.js Package
Let's now see how we can use the `sqlite3` package to connect to the database and list the tables.

We need to install the `sqlite3` package using the following command.

```bash
$ npm install sqlite3
```

Let us use the `Database` class provided by the package to connect to the database. The `Database` class provides methods to execute SQL queries, manage transactions, and handle errors.

Let's see how we can use this class to connect to the database. Make sure to start Node.js REPL in the `day_6` directory.

```bash
$ cd day_6
$ node
```

Now, you can use the following code listing to connect to the database.

*Code listing - day_6.1_Chinook_1.js*
```js
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
```

To exit the Node.js REPL use the `.exit` command.

```
> .exit
```

#### Task - Debug This Code Listing

The code listing below does not work, can we debug it?

*Code listing - day_6.2_Chinook_1.js*
```js
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

let sql = `SELECT * FROM track WHERE composer = ${composer}`;

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

```

#### Task - Using Prepared Statements

Let's now see how we can use prepared statements to execute SQL queries. Prepared statements are a feature of SQL that allows you to prepare a query once and execute it multiple times with different values.

This is useful when you need to execute the same query multiple times with different values, as it helps to improve performance and avoid SQL injection attacks.

Let's see how we can use prepared statements to execute the same query multiple times with different values. *Observe the result carefully!*

*Code listing - day_6.3_Chinook_1.js*
```js
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

// prepare statements for getting tracks compose by AC/DC
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
```

## Assignment 1
- Debug code listing `day_6.2_Chinook_1.js`, why is the variable composer not working?

## Assignment 2
- 2.1. Read code listing `day_6.4_cmdline.js` and fetch the data from the subscribers db located in the database `../data/subscribers.db` using the command line arguments as the query parameters. Please implement and test the edge cases as well.

- 2.2. Once above is done then feel free to implement the same using express.js and test it using postman. But in this case keep attention on modularity and code reusability.

