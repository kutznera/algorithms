/*function removeOddValues(obj) {
    // your code here
    for (var key in obj) {
        if (obj[key] % 2 === 1)
            delete obj[key];
    }
}
var obj = {
    a: 2,
    b: 3,
    c: 4
};
removeOddValues(obj);
console.log(obj);*/

function removeArrayValues(obj) {
    // your code here
    for (var prop in obj) {
        if (Array.isArray(obj[prop])) {
            delete obj[prop];
        }
    }
}

var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }