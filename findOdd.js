function findOdd(A) {
    let count = 0
    value = A[0]
    for(let i = 0; i < A.length; i++) {
        if(A[i] == value) {
            count++
        }
    }
    if(count%2 == 0) {
        B = A.filter(n => n !== value)
        if(B.length == 1) {
            return B[0]
        }
        else {
            return findOdd(B)
        }
    }
    else {
        return value
    }  
}

// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) //10
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))  //5
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))  //-1