/*
const printArrayLength = (arr, numberOfLoops) => {
    console.log(arr.length)
}
printArrayLength([4, 3, 12, 9])
console.log('------')

const printArray = (arr) => {

    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i])
    }
}

printArray([1, 2, 3, 4])
console.log('-----')

const printArrayManyTimes = (arr, timesLoops) => {
    for (var j = 0; j < timesLoops; j++) {

        for (var i = 0; i < arr.length; i++) {

            console.log(arr[i])
        }
    }
}

printArrayManyTimes([7, 3, 13], 5)

console.log('-----')

*/
const greets = ["hi", "hello", "hey"];​
function circularArray(arr, numLoops) {
    const len = arr.length;
    let i = 0;​
    // "i" can grow to infinity,
    // but "index" will always be bounded by the array length
    while (i < len * numLoops) {
        const index = i % len;​
        console.log(arr[index]);
        i++;​
        if (index === len - 1) console.log("---------");
    };

    circularArray(greets, 7)