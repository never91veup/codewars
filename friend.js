function friend(friends){
    let myFriend = []
    let j = 0
    for(let i = 0; i < friends.length; i++) {
        if(friends[i].length == 4) {
            myFriend[j] = friends[i]
            j++
        }
    }
    
    return myFriend
}

// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }

friend(["Ryan", "Kieran", "Mark"])
console.log(friend(["Ryan", "Kieran", "Mark"]))
// console.log("next")
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))