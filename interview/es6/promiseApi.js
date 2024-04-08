let Promise1 = new Promise((resolve,reject) => {
    resolve('promise 1 success');
})

let Promise2 = new Promise((resolve,reject) => {
    resolve('promise 2 success')
})

let Promise3 = new Promise((resolve,reject) => {
    reject('promise 3 failed')
})

let Promise4 = new Promise((resolve,reject) => {
    resolve('promise 4 success')
})

// let promiseAllReject = Promise.all([Promise1,Promise2,Promise3]).then(([result1,result2,result3]) => {
//     console.log(result1, 'result1');
//     console.log(result1, 'result2');
//     console.log(result1, 'result3');
// }).catch((error) => {
//     console.log(error)
// })

// let promiseAllResolve = Promise.all([Promise1,Promise2,Promise4]).then(([result1,result2,result3]) => {
//     console.log(result1, 'result1');
//     console.log(result1, 'result2');
//     console.log(result1, 'result4');
// }).catch((error) => {
//     console.log(error)
// })

// let promiseAllSettled = Promise.allSettled([Promise1,Promise2,Promise3]).then(([result1,result2,result3]) => {
//     console.log(result1, 'result1');
//     console.log(result2, 'result2');
//     console.log(result3, 'result3');
// }).catch((error) => {
//     console.log(error)
// })

// [Promise1,Promise2,Promise3]?.reduce((pre,cur) => pre.then(cur),Promise.resolve())
// .then((results) => {
//     console.log(results)
// })
// Promise.resolve()
//   .then(Promise1)
//   .then(Promise2)
//   .then(Promise4)
//   .then((result3) => {
//     console.log(result3)
//   });

let x = 2;
  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };
  
  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为 y 没有声明
    y + 2;
  }).then(function() {
    console.log('carry on');
  });

