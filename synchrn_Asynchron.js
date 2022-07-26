// synchronus
// function makeGreeting(name) {
//     return `Hello, my name is ${name}!`;
// }
// const name = 'Miriam';
// const greeting = makeGreeting(name);
// console.log(greeting);
// // "Hello, my name is Miriam!"
  


// asynchronus
// setTimeout(() => {
//     for(let index=0;index<4;index++){
//         const element=index;
//         console.log("this is index number"+index);
//     }
// }, 100);
// console.log("done printing")



// console.log('One');
// setTimeout(() => console.log('Two'), 100);
// console.log('Three');
// // LOGS: 'One', 'Three', 'Two'



// function printMe() {
//     console.log('print me');
// }
// function test() {
// console.log('test');
// }
// setTimeout(printMe, 2000);
// test();



// function f1() {
//     console.log('f1');
// }
// function f2() {
//     console.log('f2');
// }
// function main() {
//     console.log('main');
//     setTimeout(f1, 0);
    
//     new Promise((resolve, reject) =>
//         resolve('I am a promise')
//     ).then(resolve => console.log(resolve))
//     f2();
// }
// main();




  