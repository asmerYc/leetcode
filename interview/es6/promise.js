let countValue = new Promise(function(resolve, reject){
    // resolve('Promise resolved');
    reject('Promise rejected');
});

// excutes when promise is resolved successfully

// countValue.then((result) => {
//     console.log(result)
// }).then(() => {
//     console.log('you can call multiple functions by this way');
// }).catch((error) => {
//     console.log(error)
// })

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);