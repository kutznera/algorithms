//Call stack first try

const BulkExports = require("twilio/lib/rest/preview/BulkExports")

function fish() {
    console.log("This is Great!")
    shoes()
}

function shoes() {
    console.log("I am having so much fun!")
    makeup()
}

function makeup() {
    console.log("Are we learning?")
}

fish()


// Try to guess what the output will be in order.

// A calls B
function A(x) {
    console.log("A");

    const result = B(x);

    return result - 1;
}
// B squares the given number
function B(x) {
    console.log("B");

    return x ** 2;
}


console.log(A(5)); // 24

// Trying something more difficult
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}


let x = (10, 5);
console.log(x)