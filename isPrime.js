function isPrime(n) {

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const firstNPrimes = (n, startingAt = 2) => {
    var answers = []
    console.log(answers.length == n) // for loop not working, had to check
    for (var i = startingAt; answers.length < n; i++) { //Start at startingAt while answers is less than n
        if (isPrime(i)) answers.push(i) //adds answer to array if 
    }
    return answers
}

console.log(isPrime(28))
console.log(firstNPrimes(10, 7))