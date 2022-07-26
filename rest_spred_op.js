// Rest Parameter
// let func = function(...args) {
//     console.log(args);
// }
// func(3); // [3]
// func(4, 5, 6); // [4, 5, 6]



// function sum(x, y ,z) {
//     console.log(x + y + z);
// }
// const num1 = [1, 3, 4, 5];
// sum(...num1); // 8



// function sum(...inputs) {
//     console.log(...inputs);
//     var total=0;
//     for(let i of inputs){
//         total+=i
//     }
//     console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9,10.11); 



// function fun(a,b,...c){
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf("priya"));
// }
// fun("AARTI","SHEETAL","bhagyshree","pooja","priya");



// Spread Operator
// Copy Array Using Spread Operator
// You can also use the spread syntax ... to copy the items into a single array. For example,
// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]


// Clone Array Using Spread Operator
// In JavaScript, objects are assigned by reference and not by values. For example,
// let arr1 = [ 1, 2, 3];
// let arr2 = arr1;
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]
// // append an item to the array
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]



// let arr1 = [ 1, 2, 3];
// // copy using spread syntax
// let arr2 = [...arr1];
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]
// // append an item to the array
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]



// Spread Operator with Object
// You can also use the spread operator with object literals. For example,
// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };
// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // {x: 1, y: 2, z: 3}


// replace apply
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// var arrval=[5,5,3];
// console.log(...arrval);
// sum(...arrval);
// sum.apply(null,arrval)


// replace concat
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];
// let arr3=[11,12,13,14,15];
// // arr1=arr1.concat(arr2,arr3)
// arr1=[...arr1,...arr2,...arr3]
// console.log(arr1);



// replace copy()
// let arr1=[1,2,3,4,5];
// let arr2=arr1
// // arr2.push(4,5);
// // console.log(arr1);
// // console.log(arr2);

// arr2=[...arr1,4,5]
// console.log(arr2)
// console.log(arr1)





