const fs = require('fs');
const path = require('path');

// write to file
fs.readdir(
    path.join(__dirname),
    (err, data) => {
        if (err) throw err;
        console.log('Files in directory: ', data);
    });


// Assignment:
// Please write a program where the diretcory can be specified as a const variable
// and the files in that directory can be listed. Also, explore what you can do if
// an item is a file or a directory itself. Which other packages can you use?
// ----------------------------ANSWER-------------------------------------
// const items=[];
// const dir='../day_3';
// fs.readdir(
//     path.join(dir),
//     (err, data) => {                //this is callback a function is called inside another function
//         if (err) throw err;
//                                 // data.forEach(file => {
//                                 //     items.push(file)
//                                 //   })
//                                 //   console.log(items)        //logging the array outside will result empty bcz fs.readdir is async and it takes tym .So try to print inside the call back;
//         data.forEach((item)=>{
//             fs.stat(item,(err,stats)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 if(stats.isFile()){
//                     console.log("File : ",item);
//                 }
//                 else if(stats.isDirectory()){
//                     console.log("Directory : ",item)
//                 }
//                 console.log("Meta data of the :",item)
//                 console.log(stats.size," in bytes");
//                 console.log(stats.mode);
//                 console.log(stats.mtime);
//                 console.log("Is File : ",stats.isFile());
//                 console.log("Is Directory: ",stats.isDirectory());
//             })
//         })
//     });