function dirReduc(arr) {
    console.log(arr)
    let stek = [arr[0]]
    console.log(stek)
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == "SOUTH" && stek[stek.length - 1] == "NORTH" || arr[i] == "NORTH" && stek[stek.length - 1] == "SOUTH" || arr[i] == "WEST" && stek[stek.length - 1] == "EAST" || arr[i] == "EAST" && stek[stek.length - 1] == "WEST") {
            stek.pop()
            console.log(stek)
        }
        else {
            stek.push(arr[i])
            console.log(stek)
        }
    }
    return stek
}

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))