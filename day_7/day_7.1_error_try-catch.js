function parseJSON(data) {
    return JSON.parse(data);
}

try {
    const result = parseJSON('A string');
    console.log(JSON.stringify(result));
} catch (err) {
    // console.log(err);
    console.log(err.message); // Unexpected token A in JSON at position 0
}