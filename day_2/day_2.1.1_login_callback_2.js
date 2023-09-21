// the passcode function
function passcode(data) {
    console.log("passcode()::", data)
}

// the synccode function
function synccode(data) {
    console.log("synccode()::", data)
}

// function that simulates login process
function loginUser(email, password, callback_A) {
    // the login process simulated by timeout with 1 sec delay
    setTimeout(() => {
        let sessionID = "1234567890";
        let key = "wsx98766dre4xxd";
        callback_A(
            {status: "login complete, initiating passcode", key: key },
            synccode(
                {
                    status: "login complete, initiating syncode",
                    key: key,
                    sessionID: sessionID
                })
        );
        // callback_B({
        //     status: "login complete, passcode and synccode initiated",
        //     key: key,
        //     sessionID: sessionID
        // });
    }, 1000)

    console.log("loginUser()...")
}

// send user details for login
loginUser(
    "rks1@callback.com", 123456,
    passcode, // callback_A
    // (data) => { // callback_B
    //     console.log("callback::", data)
    // }
)

// the main thread
console.log("The main thread...")
