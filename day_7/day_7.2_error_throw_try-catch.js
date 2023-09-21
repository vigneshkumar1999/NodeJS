function square(num) {
    if (typeof num !== 'number') {
        throw new TypeError(`Expected number but got: ${typeof num}`);
    }
    return num * num;
}

try {
    console.log(square('8'));
} catch (err) {
    console.log(err.message); // Expected number but got: string
}