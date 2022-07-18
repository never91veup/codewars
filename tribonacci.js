function tribonacci(signature,n){
    if(n == 0) {
        return []
    }
    if(n <= signature.length && n !== 0) {
        return signature.slice(0, n)
    }
    for(let i = 3; i < n; i++) {
        signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1]
    }
    return signature
}

// console.log(tribonacci([300,200,100],0))
// console.log(tribonacci([1,2,3],10))
console.log(tribonacci([1,1,1],1))
