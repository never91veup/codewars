function rot13(message){
    let mes = message.split('')
    let unicode = []

    for(let i = 0; i < mes.length; i++) {
        if(isNaN(mes[i])) {
            unicode.push(mes[i].charCodeAt().toString())
            if(unicode[i] >= 97 && unicode[i] <= 122) {
                if(unicode[i] <= 109) {
                    unicode[i] = String.fromCodePoint(+unicode[i] + 13)
                }
                else {
                    unicode[i] = String.fromCodePoint(+unicode[i] - 13)
                }
            }
            else if(unicode[i] >= 65 && unicode[i] <= 90) {
                if(unicode[i] <= 77) {
                    unicode[i] = String.fromCodePoint(+unicode[i] + 13)
                }
                else {
                    unicode[i] = String.fromCodePoint(+unicode[i] - 13)
                }
            }
            else {
                unicode[i] = mes[i] 
            }

        }
        else {
            unicode[i] = mes[i]
        }
    }

    return unicode.join('')
}

console.log(rot13("test")) //grfg
// console.log(rot13("Test")) //Grfg