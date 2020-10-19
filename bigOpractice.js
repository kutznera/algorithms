console.log('\n\nConstant Time\n');
const printArrayLength = (arr, numberOfLoops) => {
    console.log(arr.length)
}
printArrayLength([4, 3, 12, 9])
console.log('------')

console.log('\n\nLinear Time\n')
const printArray = (arr) => {

    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i])
    }
}

printArray([1, 2, 3, 4])
console.log('-----')

console.log('\n\nPolynomial Time\n');
const printArrayManyTimes = (arr, timesLoops) => {
    for (var j = 0; j < timesLoops; j++) {

        for (var i = 0; i < arr.length; i++) {

            console.log(arr[i])
        }
    }
}

printArrayManyTimes([7, 3, 13], 5)

console.log('-----')
