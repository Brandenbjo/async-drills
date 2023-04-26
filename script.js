// let message = (hello) => {
//     console.log(hello)
// };
// message('hi')

// setTimeout(() => { message('hey') }, 4000)

// let getwords = () => {

//     console.log("hi")

//     setTimeout(() => {
//         console.log("hey")
//     }, 3000)

//     setTimeout(() => {
//         console.log("bye")
//     }, 5000)

//     setTimeout(() => {
//         console.log("goodbye")
//     }, 6000)
// }
// getwords()


// let done = () => {
//     return console.log("Job's done!")
// }

// let countdown = (num, callback) => {
//     setTimeout(() => {
//         if (num === 0) {
//             callback()

//         } else {
//             console.log(num)
//             countdown(num - 1, callback)
//         }
//     }, 1000


//     )
// }


// countdown(5, done)

let lunchTime = true


let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lunchTime === true) {
                let favfood = {
                    lunch: "food",
                    drink: "liquid"
                }
                resolve(favfood);
            } else if (lunchTime === false) {
                let err = new Error('What happened?');
                reject(err);
            }

        }, 2000);
    })
};




orderMeSomeFood().then((resolve) => {
    console.log(resolve)
}).catch((error) => {
    console.log(error)

})














