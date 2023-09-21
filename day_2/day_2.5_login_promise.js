// the passcode function
function passcode(data) {
    console.log(data)

    return new Promise((stir, fry) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                let passKey = Math.random().toString(16).substr(2, 10);
                stir({ status: "passcode complete", key: data.key, passKey: passKey });
            } else {
                fry({ status: "passcode failed", key: null, passKey: null });
            }
        }, 1000)
    })
}

// the syncode function
function synccode(data) {
    console.log(data)
    return new Promise((shake, bake) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                // getb syncKey as a 10 char hex string
                let syncKey = Math.random().toString(16).substr(2, 10);
                shake({ status: "synccode complete", key: data.key, syncKey: syncKey });
            } else {
                bake({ status: "synccode failed", key: data.key, syncKey: null });
            }
        }, 1000)
    })
}

// function that simulates login process
function loginUser(email, password) {

    // the login process simulated by timeout with 1 sec delay
    return new Promise((abra, cadabra) => {
        setTimeout(() => {
            let key = "wsx98766dre4xxd";
            let error = false;
            if (!error) {
                abra({ status: "login complete", key: key });
            } else {
                cadabra({ status: "login failed", key: null });
            }
        }, 1000)
    })

}

// send user details for login
loginUser("rks1@callback.com", 123456)
    .then((data) => {
        passcode(data)
            .then((data) => {
                console.log(data),
                synccode(data)
                    .then((data) => { console.log(data) })
                    .catch((data) => {
                        console.log(data)
                    })
            })
            .catch((data) => {
                console.log(data)
            })
    })
    .catch((data) => { console.log(data) })

// the main thread
console.log("The main thread...")

// As next steps
// 1. Crash this code and play around with it seriously.
