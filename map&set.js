// // create a set
// let map1 = new Map();
// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); // Map {"info" => {name: "Jack", age: 26}}



// // Map with object key
// let map2 = new Map();
// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});
// console.log(map2); // Map {{} => {name: "Jack", age: "26"}}



// // Access Map Elements
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}



// // Check Map Elements
// const set1 = new Set([1, 2, 3]);
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// // check if an element is in Set
// console.log(map1.has('info')); // true



// // Removing Elements
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// // removing a particular element
// map1.delete('address'); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 
// map1.delete('info'); // true
// console.log(map1); // Map {}



// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// // removing all element
// map1.clear();
// console.log(map1); // Map {}



// // JavaScript Map Size
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// console.log(map1.size); // 1



// // Iterate Through a Map
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through Map
// for (let [key, value] of map1) {
//     console.log(key + '- ' + value);
// }



// // using forEach method()
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through Map
// map1.forEach(function(value, key) {
//   console.log(key + '- ' + value)
// })



// // Iterate Over Map Keys
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through the Map
// for (let key of map1.keys()) {
//   console.log(key)
// }



// // Iterate Over Map Values
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through the Map
// for (let values of map1.values()) {
//     console.log(values);
// }



// // Get Key/Values of Map
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through the Map
// for (let elem of map1.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }



// // JavaScript WeakMap
// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 
// let obj = {};
// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');
// console.log(weakMap); // WeakMap {{} => "hello"}



// // WeakMap Methods
// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 
// let obj = {};
// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');
// console.log(weakMap); // WeakMap {{} => "hello"}
// // get the element of a WeakMap
// console.log(weakMap.get(obj)); // hello
// // check if an element is present in WeakMap
// console.log(weakMap.has(obj)); // true
// // delete the element of WeakMap
// console.log(weakMap.delete(obj)); // true
// console.log(weakMap); // WeakMap {} 




// // create Set
// const set1 = new Set(); // an empty set
// console.log(set1); // Set {}
// // Set with multiple types of value
// const set2 = new Set([1, 'hello', {count : true}]);
// console.log(set2); // Set {1, "hello", {count: true}}



// // Set with duplicate values
// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3); // Set {1, 2}



// // Access Set Elements
// const set1 = new Set([1, 2, 3]);
// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]



// const set1 = new Set([1, 2, 3]);
// // check if an element is in Set
// console.log(set1.has(1));



// // Adding New Elements
// const set = new Set([1, 2]);
// console.log(set.values());
// // adding new elements
// set.add(3);
// console.log(set.values());
// // adding duplicate elements
// // does not add to Set
// set.add(1);
// console.log(set.values());



// // Removing Elements
// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]
// // removing a particular element
// set.delete(2);
// console.log(set.values()); // Set Iterator [1, 3]



// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]
// // remove all elements of Set
// set.clear();
// console.log(set.values()); // Set Iterator []



// // Iterate Sets
// const set = new Set([1, 2, 3]);
// // looping through Set
// for (let i of set) {
//     console.log(i);
// }



// // JavaScript WeakSet
// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}
// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }
// // adding object (element) to WeakSet
// weakSet.add(obj);
// console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}



// // trying to add string to WeakSet
// weakSet.add('hello');
// // throws error
// // TypeError: Attempted to add a non-object key to a WeakSet
// console.log(weakSet);



// // WeakSet Methods
// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}
// const obj = {a:1};
// // add to a weakSet
// weakSet.add(obj);
// console.log(weakSet); // WeakSet {{a: 1}}
// // check if an element is in Set
// console.log(weakSet.has(obj)); // true
// // delete elements
// weakSet.delete(obj);
// console.log(weakSet); // WeakSet {}



// // Mathematical Set Operations
// // Set Union Operation
// // perform union operation
// // contain elements of both sets
// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }
// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);
// let result = union(setA, setB);
//  console.log(result);



// // Set Intersection Operation
// // perform intersection operation
// // elements of set a that are also in set b
// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }
// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);
// let result = intersection(setA, setB);
// console.log(result);



// // Set Difference Operation
// // perform difference operation
// // elements of set a that are not in set b
// function difference(setA, setB) {
//     let differenceSet = new Set(setA)
//     for (let i of setB) {
//         differenceSet.delete(i)
//     }
//     return differenceSet
// }
// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);
// let result = difference(setA, setB);
// console.log(result);



// // Set Subset Operation
// // perform subset operation
// // true if all elements of set b is in set a
// function subset(setA, setB) {
//     for (let i of setB) {
//         if (!setA.has(i)) {
//             return false
//         }
//     }
//     return true
// }
// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['apple', 'orange']);
// let result = subset(setA, setB);
// console.log(result);



