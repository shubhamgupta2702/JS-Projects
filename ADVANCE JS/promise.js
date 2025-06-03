// The Promise Object represents the eventual completion or failure of an asynchronus operation and its resulting Value.
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async Task
    // DB Calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()       // this is the way of conecting resolve to promise (then).
    }, 1000)
})

promiseOne.then(function () {   // way of consuming the promise. used .then
    console.log('Promise 1 Consumed');

})

//  we use .then in same code then is connected by using resolve()

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2');
        resolve()
    }, 2000)
}).then(function () {
    console.log('Promise 2 Consumed');

})

//Passing data in resolve as an form of object.
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "chai",
            email: "shubham@gupta.com"
        })
    }, 3000)
})

promiseThree.then(function (user) {   // name any varibale in function parameter  and it is accessible to resolve | here data is comes from resolve
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {   // if error is not  equal to zero.
            resolve({
                username: "shubhamji",
                password: '123'
            })
        } else {
            reject('ERROR SOMETHING WENT WRONG')
        }
    }, 4000)
})

promiseFour.then(user => {
    console.log(user);
    return user.username

})
    .then(username => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    }).finally(()=> console.log('The promise is either resolved or rejected!!'))  // it tells us that finally promised is resolved or rejected..


    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function () {
            let error = false
            if (!error) {
                resolve({
                    username: "JavaScript",
                    password: '123'
                })
            } else {
                reject('ERROR JS WENT WRONG')
            }
        }, 4000)

    })

async function consumedPromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}

consumedPromiseFive() 