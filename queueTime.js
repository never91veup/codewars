function queueTime(customers, n) {
let time = (new Array(n)).fill(0)
// console.log(time)
    // while(customers.length > 0) {
    //     queueIter(customers, n)
    //     break
    // }
    // queueIter(customers, n, time)
    // function queueIter(customers, n) {
        // console.log(Math.min().time)
        if(customers.length == 0) {
            return 0
        }

        if(time.length >= customers.length) {
            return Math.max.apply(null, customers)
        }

        for(let i = 0; i < time.length; i++) {
            time[i] += customers[i];
        }
        customers = customers.slice(time.length, customers.length)
        console.log(customers)
        console.log(time)

        // for(let j = 0; j < customers.length; j++) {
            // console.log(time.indexOf(Math.min.apply(null, time)))
        // console.log(customers.length !== 0)
        // console.log(time[time.indexOf(Math.min.apply(null, time))] += customers[0])
            while(customers.length !== 0) {
                time[time.indexOf(Math.min.apply(null, time))] += customers[0];
                customers = customers.slice(1, customers.length)
                console.log(time)
            }

            return Math.max.apply(null, time)
        // }
        // if(customers.length > 0) {
        //     return queueIter(customers, n, time)
        // }
        // else {
        //     return -1
        // }
    // }

}

// console.log(queueTime([1,2,3,4], 1))
// console.log(queueTime([1,2,3,4,5], 100))
console.log(queueTime([], 1))
// console.log(queueTime([2,2,3,3,4,4], 2))


// function queueTime(customers, n) {
//     var w = new Array(n).fill(0);
//     for (let t of customers) {
//       let idx = w.indexOf(Math.min(...w));
//       w[idx] += t;
//     }
//     return Math.max(...w);
// }