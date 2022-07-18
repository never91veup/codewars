function findOutlier(integers) {
    let count = 0
    let nechet = 0
    let value = 0

    for(let i = 0; i < integers.length; i++) {

        if(Math.abs(integers[i])%2 == 0)
        count++
        else 
        nechet++

        for(let j = 0; j < integers.length; j++) {
            if(count > 1 && Math.abs(integers[j])%2 == 1)
            value = integers[j]
            else if (nechet > 1 && Math.abs(integers[j])%2 == 0)
            value = integers[j]
        }
    }

    return value

}

findOutlier([0, 1, 2])
console.log(findOutlier([0, 1, 2]))
findOutlier([1, 2, 3])
console.log(findOutlier([1, 2, 3]))
findOutlier([111444142,-97859320,4160354,-106630897])
console.log(findOutlier([111444142,-97859320,4160354,-106630897]))