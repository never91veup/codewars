function rgb(r, g, b){
    let parsed = [r, g, b]
    let res = ''
    for(let i = 0; i < parsed.length; i++) {
        if(parsed[i] > 255) {
            parsed[i] = 255
        }
        else if(parsed[i] < 0) {
            parsed[i] = 0
        }
        if(Math.abs(parsed[i]) <= 15) {
            parsed[i] = '0' + parsed[i].toString(16).toUpperCase()
        }
        else {
            parsed[i] = parsed[i].toString(16).toUpperCase()
        }
        res += parsed[i]
    }
    return res
}

// rgb(0, 0, 0)
// rgb(0, 0, -20)
// rgb(300,255,255)
// rgb(173,255,47)
console.log(rgb(118,120,5))