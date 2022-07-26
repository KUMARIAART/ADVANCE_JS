// Program with a Promise
// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });
// console.log(countValue);



// // Chaining the Promise with then()
// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
//   // executes when promise is resolved successfully
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });



// // JavaScript catch() method
// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );



// // JavaScript finally() method
// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });
// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );



// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
//     promise.
//         then(function () {
//             console.log('Success, You are a GEEK');
//         }).
//         catch(function () {
//             console.log('Some error has occurred');
//         });





// var promise = new Promise(function(resolve, reject) {
//     const x = "I AM SOFTWARE DEVLOPER";
//     const y = "I WAS START MY CORDING JOURNEY FROM NAVGURUKUL"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
//     promise.
//         then(function () {
//             console.log('Success, You are a SOFTWARE DEVLOPER');
//         }).
//         catch(function () {
//             console.log('Some error has occurred');
//         });
    


// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=> {
//             const error=true;
//             if(!error){
//                 console.log(`function:you promise has been resolved`);
//                 resolve();
//             }
//             else{
//                 console.log(`function:you promise has been not resolved`);
//                 reject();
//             }
//         },2000);
//     })
// }

// func1().then(function(){
//     console.log("AARTI:thanks for resolving");
// }).catch(function(error){
//     console.log("AARTI:very bed bro.resion:"+error);
// })



