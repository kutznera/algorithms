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