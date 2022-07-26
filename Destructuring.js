// // Arrays destructuring
// var a,b
// [a,b]=[7,8];
// console.log(a);
// console.log(b);


// var a,b,leftout;
// [a,b]=[7,8];
// console.log(a);
// console.log(b);
// [a,b,leftout]=[10,20,30,40,50,60];
// console.log(leftout);
// [a,b,...leftout]=[10,20,30,40,50,60];
// console.log(leftout);


// Objects destructuring
// ({a,b}={a:1,b:2});
// console.log(a);
// console.log(b);


// ({a,b,...lefout}={a:1,b:2,c:3,d:4,e:5});
// console.log(a);
// console.log(b);
// console.log(lefout);


// What is destructuring used for?
// Variable assignment
// var arr=["a","b","c"];
// var [a,b,c]=arr
// console.log(a);
// console.log(b);
// console.log(c);


// Default values
// var a,b;
// [a,b]=[4]
// console.log(a);
// console.log(b);

// var a,b;
// [a=7,b=7]=[1];
// console.log(a);
// console.log(b);


// Swapping
// Using temporary variable
// var a=1;
// var b=2;
// var temp
// temp=a
// a=b;
// b=temp;
// console.log(a);
// console.log(b);

// Using destructuring
// var a=2;
// var b=3;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);


// Ignoring values
// function noice(){
//     return [12,13,14]
// }
// var [a,,b]=noice()
// console.log(a);
// console.log(b);


// Indirect assignment of a function return
// function x(){
//         return [1,2]
//     }
//     var [a,b]=x()
//     console.log(a);
//     console.log(b);


// Assignment to new variables
// var obj={e:12,x:null};
// var {e:t,x:u}=obj;
// console.log(t);
// console.log(u);


// Nested object and array destructuring
// let data={
//     location:[
//         {
//             latitude:"34.8,38.6",
//             longitude:"98.7,99.0",
//             city:"hydrabad",
//             cuntry:"india"
//         }
//     ]
// };
// let obj_location={
//     location:[
//         {
//             latitude:mylatitude,
//             longitude:mylongitude,
//             city:mycity,
//         }
//     ]
// }=data;
// console.log(mylatitude);
// console.log(mylongitude);
// console.log(mycity);


// For constructing
// const obj={};
// obj.fname="sonu";
// obj.lname="monu";
// console.log(obj);
// let f=obj.fname
// let l=obj.lname
// console.log(f,l);


// var people=[
//     {
//         name:"me",
//         family:{
//             mother:"mummy",
//             father:"papa",
//             sister:"behan"
//         },
//         age:21
//     },
//     {
//         name:"aarti",
//         family:{
//             mother:"mirja devi",
//             father:"ashok gupta",
//             sister:"kajal"
//         },
//         age:23
//     }
// ]
// for(var {name:n,family:{mother:m}} of people){
//     console.log("name : ",n,"   mother :  ", m);
// }