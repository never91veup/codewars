function domainName(url){
    // try {
        // console.log(url[0,1,2] == 'w')
        if(url.slice(0, 4) !== 'http') {
            url = "http://" + url
        }
        // else {
        //     url = url
        // }
        let link = new URL(url).hostname
        // console.log(link)
        if(link.slice(0, 3) == 'www') {
            link = link.slice(4, link.length)
        }
        let res = link.slice(0, link.indexOf('.'))
        // let array = (url).split("")
        // a = array.indexOf("/")
        // if(a >= 0) {
        //     b = array.slice(a+2, array.length)
        // }
        // else {
        //     b = array
        // }
        // c = b.findLastIndex(el => el == ".") 
        // d = b.slice(0, c)
        // e = d.findIndex(el => el == ".")
        // f = d.slice(e+1, d.length)
        // return f.join("")
        // // console.log(array)
        // // console.log(a)
        // // console.log(b)
        // // console.log(c)
        // // console.log(d)
        // // console.log(e)
        // // console.log(f)
        return res
    // }
    // catch {
    //     url = "http://" + url
    //     console.log(url)
    //     let link = new URL(url).hostname
    //     console.log(link)
    //     res = link.slice(link.indexOf('.') + 1, link.length)
    //     res = res.slice(0, res.indexOf('.'))
    //     return res
    // }

}

console.log(domainName("http://google.com"))
console.log(domainName("https://youtube.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("www.x5f65a90tl.com/error"))
console.log(domainName("http://fiw0w5jxqsz.co/warez/"))
















// domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];