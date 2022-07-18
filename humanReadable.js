function humanReadable (seconds) {
    let time = (new Array(3)).fill(0)
    time[0] = ('0' + Math.floor(seconds/3600)).toString().slice(-2)
    time[1] = ('0' + Math.floor((seconds%3600)/60)).toString().slice(-2)
    time[2] = ('0' + ((seconds%3600)%60)).toString().slice(-2)
    return time.join(':')
}

console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))
console.log(humanReadable(359999))