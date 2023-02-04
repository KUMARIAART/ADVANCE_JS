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



// let a = prompt("Value 1?");
// let b = prompt("Value 2?");
// a = Number(a);
// b = Number(b);
// let hypotenuseVal = ((a * a) + (b * b))**0.5;
// console.log(hypotenuseVal);


// let a = 4;
// let b = 11;
// let c = 21;
// a = a + b;
// a = a / c;
// c = c % b;
// console.log(a, b, c);


// //Convert miles to kilometers. 
// //1 mile equals 1.60934 kilometers.
// let myDistanceMiles = 13;
// let myDistanceKM = myDistanceMiles * 1.60934;
// console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");


// //1 inch = 2.54 centimetres.
// //2.2046 pounds in a kilo
// let inches = 72;
// let pounds = 180;
// let weight = pounds / 2.2046; // in kilos
// let height = inches * 2.54; // height in centimetres
// console.log(weight, height);
// let bmi = weight/(height/100*height/100);
// console.log(bmi);


// const myArr = [1, 2, 3];
// const bigArr = [myArr, myArr, myArr];
// console.log(bigArr[1][1]);
// console.log(bigArr[0][1]); 
// console.log(bigArr[2][1]);


// const myCar = {
//     make: "Toyota",
//     model: "Camry",
//     tires: 4,
//     doors: 4,
//     color: "blue",
//     forSale: false
// };
// let propColor = "color";
// myCar[propColor] = "red";
// propColor = "forSale";
// myCar[propColor] = true;
// console.log(myCar.make + " " + myCar.model);
// console.log(myCar.forSale);


// const test = false;
// console.log(test);
// if(test){
//     console.log("It's True");
// }
// if(!test){
//     console.log("False now");
// }


// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);


// const myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${x}`, status: stat
//     };
//     myWork.push(temp);
// }
// console.log(myWork);


// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y <= rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x <= cols; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);


// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//     if (counter % 8 == 0) {
//         if (row != undefined) {        
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
// }
// console.table(grid);


// const myArray = [];
// for (let x = 0; x < 10; x++) {
//     myArray.push(x + 1);
// }
// console.log(myArray);


// let output = ""; 
// let skipThis = 7; 
// for (let i = 0; i < 10; i++) { 
//   if (i === skipThis) { 
//     break; 
//   } 
//   output += i; 
// } 
// console.log(output);


// const myTable = [];
// const numm = 10;
// for(let x=1; x<=numm; x++){
//     const temp = [];
//     for(let y = 0; y<numm; y++){
//         temp.push(x*y);
//     }
//     myTable.push(temp);
// }
// console.table(myTable);


// const myArr = [];
// for(let x=0; x<10; x++){
//   let val1 = 5 * x;
//   let val2 = x * x;
//   let res = cal(val1, val2, "+");
//   myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//   if (op == "-") {
//     return a - b;
//   } else {
//     return a + b;
//   }
// }


// const one  = ()=> console.log('one'); 
// const two  = ()=> console.log('two'); 
// const three = () =>{
//     console.log('three'); 
//     one(); 
//     two(); 
// }
// const four = () =>{
//     console.log('four');  
//     setTimeout(one,0); 
//     three();
// }
// four();


// class Animal {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return this.species + " is eating";
// }
// let cat = new Animal("cat", "meow");
// let dog = new Animal("dog", "bark");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);


// class Menu {
//     #offer1 = 10;
//     #offer2 = 20;
//     constructor(val1, val2) {
//         this.val1 = val1;
//         this.val2 = val2;
//     }
//     calTotal(){
//         return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
//     }
//     get total(){
//         return this.calTotal();
//     }
// }
// const val1 = new Menu(2,0);
// const val2 = new Menu(1,3);
// const val3 = new Menu(3,2);
// console.log(val1.total);
// console.log(val2.total);
// console.log(val3.total);


// const secretMes1 = "How's%20it%20going%3F";    
// const secretMes2 = "How's it going?";
// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeURI(uri);
// console.log(encoded);


// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     const tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(val));


// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
//     console.log(letter);
//     val = val.replaceAll(letter,index);
// });
// console.log(val);


// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//     console.log(ranNum(1, 100));
// }


// let future = new Date(2025, 5, 15);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);


// function greet(fullName){
//     console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
// }
// function processCall(user, callback){
//     const fullName = user.split(" ");
//     callback(fullName);
// }
// processCall("Laurence Svekis", greet);


// let cnt = 0;
// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter:${cnt}`);
//         }, 1000);
//     });
// }
// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }




  
