// this keyword alone
// console.log(this);


// using strict mode
// "use strict"
// const x=this;
// console.log(x);

// function myfunction(){
//     console.log(this);
// }
// myfunction();



// // this in a function default
// function myfunction(){
//     return this
// }
// console.log(myfunction());



// this in a methods
// const dic1={
//     "name":"Aarti",
//     "age":23,
//     "education":"graduate",
//     city:function(){
//         console.log(this.name)
//         console.log(this.name+","+ this.age)
//         console.log(this);
//     }
// }
// dic1.city();
// console.log(dic.city);



// const dic1={
//         "name":"Aarti",
//         "education":"graduate",
//         sum:function(){
//             var add=99+1
//             console.log("sum of two number"+add);
//             console.log(this.name)
//             console.log(this);

//             function child(){
//                 var name="aarti kumari";
//                 console.log("chile method name :"+name);
//                 console.log(this);
//             }
//             child();
//         }
// }
// dic1.sum();


// // Question 1: Variable vs property
// // What logs to console the following code snippet:
// const object = {
//   message: 'Hello, World!',
//   getMessage() {
//     const message = 'Hello, Earth!';
//     return this.message;
//   }
// };
// console.log(object.getMessage()); // What is logged?


// // Question 2: Cat name
// // What logs to console the following code snippet:

// function Pet(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }
// const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged?
// const { getName } = cat;
// console.log(getName());     // What is logged?



// // Question 3: Delayed greeting
// // What logs to console the following code snippet:

// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?
//   }
// };
// setTimeout(object.logMessage, 1000);



// // Question 4: Artificial method
// // How can you call logMessage function so that it logs "Hello, World!"?

// const object = {
//   message: 'Hello, World!'
// };
// function logMessage() {
//   console.log(this.message); // "Hello, World!"
// }



// // Question 5: Greeting and farewell
// // What logs to console the following code snippet:

// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   }
// };
// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?



// // Question 6: Tricky length
// // What logs to console the following code snippet:

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };
// object.method(callback, 1, 2);



// Question 7: Calling arguments
// What logs to console the following code snippet:

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   }
// };
// object.method(callback, 1, 2);