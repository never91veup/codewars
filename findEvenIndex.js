function findEvenIndex(arr) {
    let sumL = 0
    let sumR = 0
    arr[-1] = 0

    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j <= i; j++) {
            sumL += arr[j]
        }

        for(let k = arr.length - 1; k >= i; k--) {
            sumR += arr[k]
        }

        if(sumL == sumR) {
            return i
        }
        else if(sumL !== sumR && i == arr.length - 1) {
            return -1
        }

        sumL = 0
        sumR = 0
    }
}

findEvenIndex([1,2,3,4,3,2,1])
console.log(findEvenIndex([1,2,3,4,3,2,1]))
findEvenIndex([1,2,3,4,5,6])
console.log(findEvenIndex([1,2,3,4,5,6]))
findEvenIndex([1,100,50,-51,1,1])
console.log(findEvenIndex([1,100,50,-51,1,1]))
findEvenIndex([20,10,-80,10,10,15,35])
console.log(findEvenIndex([20,10,-80,10,10,15,35]))