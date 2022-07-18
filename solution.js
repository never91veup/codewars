function solution(list){
    let start = list[0]
    let end = list[0]
    let res = []
    let count = 0

    for(let i = 0; i < list.length; i++) {
        if(end + 1 == list[i + 1]) {
            end = list[i + 1]
            count++
            console.log('num - ' + count)
        }
        else if(end + 1 !== list[i + 1]) {
            if(start == end) {
                res.push(`${end}`)
            }
            else if(start !== end && count > 1) {
                res.push(`${start}-${end}`)
            }
            else if(start !== end && count == 1) {
                res.push(`${start}`)
                res.push(`${end}`)
            }
            start = list[i + 1]
            end = start
            count = 0
        }
        console.log('iter - ' + i)
        console.log (start)
        console.log(end)
        console.log(res)
    }

    return res.toString()
    // .slice(0, res.length - 1).join('-')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))