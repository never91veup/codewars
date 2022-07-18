function narcissistic(value) {
    let array = (""+value).split("").map(Number)
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], array.length)
    }
    return (value == sum)
}

narcissistic(153);
console.log(narcissistic(153))
narcissistic(1652);
console.log(narcissistic(1652))