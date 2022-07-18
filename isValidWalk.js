function isValidWalk(walk) {

    countN = 0
    countS = 0
    countW = 0
    countE = 0
    for(let i=0; i < walk.length; i++) {
        if(walk[i] == 'n')
        countN++
        if(walk[i] == 's')
        countS++
        if(walk[i] == 'w')
        countW++
        if(walk[i] == 'e')
        countE++
    }

    return walk.length == 10 && countN == countS && countE == countW
}

// function isValidWalk(walk) {
//     function count(val) {
//       return walk.filter(function(a){return a==val;}).length;
//     }
//     return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))