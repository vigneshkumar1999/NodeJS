// the passcode function
function passcode(data) {
    console.log("passcode()::", data)
}

// function that simulates login process
function loginUser(email, password, callback_A) {
    // the login process simulated by timeout with 1 sec delay
    setTimeout(() => {
        let sessionID = "1234567890";
        let key = "wsx98766dre4xxd";
        callback_A(
            {
                status: "login complete, initiating passcode",
                key: key
            });
        // callback_B(
        //     {
        //         status: "login complete, passcode initiated",
        //         sessionID: sessionID,
        //         key: key
        //     });
    }, 1000)
}

// send user details for login
loginUser(
    "rks1@callback.com", 123456, // email, password
    passcode, // callback A
    // (data) => { // callback B
    //     console.log("callback::", data)
    // }
)

// the main thread
console.log("The main thread...")

// use case
// 1. check login details
// 2. if login details are correct, initiate passcode
// 3. if passcode is correct, initiate session