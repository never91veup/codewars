function lastDigit(str1, str2) {  
  if(str2 == 0) {
    return 1
  }
  if(str2 == 0 && str1 == 0) {
    return 1
  }
  if(str1.slice(-1) == 1 || str1.slice(-1) == 5 || str1.slice(-1) == 6 || str1.slice(-1) == 0) {
    return +str1.slice(-1)
  }
  if(str1.slice(-1) == 9 || str1.slice(-1) == 4) {
    let res = ((+str1.slice(-1)) ** (+str2.slice(-1))).toString()
    return +res.slice(-1)
  }
  if(str1.slice(-1) == 8 || str1.slice(-1) == 2 || str1.slice(-1) == 3 || str1.slice(-1) == 7) {
    let str = (+str2.slice(-2)%4)
    if(str == 0) {
      str = 4
    }
    let res = ((+str1.slice(-1)) ** str).toString()
    return +res.slice(-1)
  }
}

// var lastDigit = function(str1, str2){
//   return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
// }

// console.log(lastDigit("45", "0")) //1
// console.log(lastDigit("4", "1"))  //4
// console.log(lastDigit("4", "2")) //6
// console.log(lastDigit("9", "7")) //9
// console.log(lastDigit("10","10000000000")) //0
// console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")) //7
console.log(lastDigit("541919646074408319104682423425737055605657191366812059181440803706989615353322222337198262", "5472"))
// console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))  //6
// 519432834035441977111188433347981805578246418683068790703^36801590996199320 has 1 as last digit!: expected 3 to equal 1