const https = require("https");

// return a number if flag is true, otherwise return 0
function getNumber(wait, flag) {
    return new Promise((stir, fry) => {
        setTimeout(() => {
            if (flag) {
                stir(1);
            } else {
                fry(0);
            }
        }, wait);
    });
}

// return the response body of a GET request to the given URL
function getText(url) {
    return new Promise((stir, fry) => {
        // Start an HTTP GET request for the URL
        let request = https.get(url);

        // Register a function to handle the "response" event.
        request.on("response", response => {
            // The response event means that response headers have been received
            let httpStatus = response.statusCode;
            // set encoding for the response body to receive json data
            response.setEncoding("utf-8");
            let body = "";  // which we will accumulate in body

            // This event handler is called when a chunk of the body is ready
            response.on("data", chunk => {
                body += chunk;
            });

            // This event handler is called when the response is complete
            response.on("end", () => {
                if (httpStatus === 200) {   // If the HTTP response was good
                    stir({ status: httpStatus, data: body });   // Pass response body
                } else {                    // Otherwise pass an error
                    fry({ status: httpStatus, data: null });
                }
            });
        });

        // We also register an event handler for lower-level network errors
        request.on("error", (err) => {
            fry(err);
        });
    });
}


let url = "https://reqres.in/api/users?page=2"

let promises = [
    getNumber(1000, true),
    getNumber(2000, true),
    getText(url)
];

// Promise.all(promises)
//     .then((results) => {
//         console.log("promise all: ", results);
//     })
//     .catch((err) => {
//         console.log("promise all: ", err);
//     });


// let promises_A = [getNumber(1000, true), getNumber(2000, true), getText(url)];
// Promise.allSettled(promises_A)
//     .then((results) => {
//         console.log("promise all settled A: ", results);
//     })
//     .catch((err) => {
//         console.log("promise all settled A: " , err);
//     });


let url_B = "https://reqres.in/api/users?page=2"
let promises_B = [getNumber(1000, true), getNumber(2000, false), getText(url_B)];
Promise.allSettled(promises_B)
    .then((results) => {
        console.log("promise all settled B: ", results);
    })
    .catch((err) => {
        console.log("promise all settled B: " , err);
    });

console.log("The main thread continues...");

// Things to try:
// 1. Play with this code and try to crash it.
// 2. Visit https://reqres.in/api/users?page=2 in your browser and see the response.
// 3. Visit https://reqres.in and check the endpoints.
// 4. Try to use different urls and see the results.
