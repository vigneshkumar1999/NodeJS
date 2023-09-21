const os = require('os');
//Number of Available CPU cores
console.log(os.cpus().length)

// platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// free memory
let freeMem = os.freemem();
console.log(`${freeMem} bytes`);
console.log(`${freeMem / 1024 / 1024 / 1024} GB`);

// total memory
let totalMem = os.totalmem();
console.log(`${totalMem} bytes`);
console.log(`${totalMem / 1024 / 1024 / 1024} GB`);

// home dir
console.log(os.homedir());

// uptime in hrs and mins and secs
let uptime = os.uptime();
let hrs = Math.floor(uptime / 3600);
let mins = Math.floor((uptime % 3600) / 60);
let secs = Math.floor((uptime % 3600) % 60);
console.log(`${hrs} hrs ${mins} mins ${secs} secs`);

// Assignment:
// 1. Please go through the os package documentation and try out the other methods.
