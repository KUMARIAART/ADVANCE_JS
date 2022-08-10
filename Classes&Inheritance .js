// // Javascript Class Methods
// class Person {
//     constructor(name) {
//     this.name = name;
//   }

//     // defining method
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// let person1 = new Person('John');

// // accessing property
// console.log(person1.name); // John

// // accessing method
// person1.greet(); // Hello John





// // Getters and Setters
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }
// let person1 = new Person('Jack');
// console.log(person1.name); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah





// class SimpleDate {
//     constructor(year, month, day) {
//         this._year = year;
//         this._month = month;
//         this._day = day;
//     }
//     addMonth(nMonths) {
//     }
//     getMonth() {
//         return this.month;
//     }
// }



// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }



// //new class from the parent
// class Bike extends Car {
//     constructor(name, year, speed) {
//         //constructor with super
//         super(name, year);
//         // Adding new property
//         this.speed = speed;
//     }
// }
// const bike1 = new Bike(' Trek', 2019,200);





// class Employee {
//     constructor(givenName, givenExperience, givenDivision) {
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.division = givenDivision;
//     }

//     slogan(){
//         return `I am ${this.name} and this company is the best`;
//     }

//     joiningYear(){
//         return 2020 - this.experience;
//     }

//     static add(a, b){
//         return a + b;
//     }
// }
// class Programmer extends Employee{
//     constructor(givenName, givenExperience, givenDivision, language, github){
//         super(givenName, givenExperience, givenDivision);
//         this.language = language;
//         this.github = github;
//     }

//     favoriteLanguage(){
//         if (this.language == 'python'){
//             return 'Python';
//         }
//         else{
//             return 'JavaScript';
//         }
//     }

//     static multiply(a, b){
//         return a * b;
//     }
// }
// // harry = new Employee("Harry", 56, "Division");
// // console.log(harry.joiningYear());
// // console.log(Employee.add(34, 5))
// rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
// console.log(rohan)
// console.log(rohan.favoriteLanguage())
// console.log(Programmer.multiply(5, 7));





// // To use class inheritance, you use the extends keyword.
// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// // inheriting parent class
// class Student extends Person {
// }

// let student1 = new Student('Jack');
// student1.greet();





// // JavaScript super() keyword
// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {
    
//         console.log("Creating student class");
        
//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Student('Jack');
// student1.greet();






// // Overriding Method or Property
// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }
    
//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }
 
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {
        
//         // call the super class constructor and pass in the name parameter
//         super(name);
        
//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }
    
//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }
// let p = new Student('Jack');
// p.greet();