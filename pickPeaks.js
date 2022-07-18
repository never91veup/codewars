function pickPeaks(arr){
    
    let res = {
        pos: [],
        peaks: []
    }

    let preValue = arr[0]
    // console.log(res)
    let up = false
    let index = 0

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > preValue) {
            up = true
            index = i
        }
        if(arr[i] < preValue && up === true) {
            res.pos.push(index)
            res.peaks.push(preValue)
            up = false
        }
        preValue = arr[i]
    }
    // return a = {pos: res.pos,
    // peaks: res.peaks}
    return res

}

console.log(pickPeaks([2,1,3,1,2,2,2,2,1]))
// console.log(pickPeaks([2,1,3,1,2,2,2,2]))
// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))
// console.log(pickPeaks([1,1,1,1]))
// console.log(pickPeaks([]))





































    // let info = {
    //     pos: [],
    //     peaks: []
    // }
    // console.log(arr)
    // let arrNew = arr.slice(1, arr.length - 1)
    // console.log(arrNew)
    // let peak = Math.max.apply(null, arrNew)
    // let pos = arrNew.indexOf(peak)
    // console.log(peak)
    // console.log(pos+1)
    // if(arr[pos + 1] > arr[pos] && arr[pos + 1] > arr[pos + 2]) {
    //     return {pos: pos + 1,peaks: peak}
    // }
    // let i = 0
    // while(i < arr.length) {
    //     if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
    //         return {pos: i, peaks: arr[i]}
    //     }
    //     i++
    // }