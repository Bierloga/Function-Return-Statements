// Checking if a number is big

const countCheck = function (number) {
    if (number > 100) {
        return true
    } else {
        return false
    }
};
console.log(countCheck(97));

// Bouncer at a club

const Brenda = function (maxNumber, currentNumber, age) {
    if (age < 18) {
        return "this is a club for adults"
    } else if (currentNumber < maxNumber) {
        return "come in"
    } else return "it's too busy now, come back later"

};
console.log(Brenda(100, 97, 27))
console.log(Brenda(100, 101, 26))
console.log(Brenda(100, 88, 17))

// Calculating the average

const averageCalc = function (number1, number2, number3, number4, number5) {
    return (Math.round((number1 + number2 + number3 + number4 + number5) / 5))
}

console.log(averageCalc(3, 5, 3, 1, 9))