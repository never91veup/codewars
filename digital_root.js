// function digital_root(n) {

//     n = ("" + n).split("").map(Number)
//     let sum = 0

//     for(let i = 0; i < n.length; i++) {
//         sum += n[i]
//     }

//     if(sum <= 9) {
//         return sum
//     }
//     else {
//         return digital_root(sum)
//     }

// }

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
        n.toString().split('').map(Number).reduce(function(acc, d) {
            return acc + d
        }, 0)
    )

  }

console.log(digital_root(16))
console.log(digital_root(456))