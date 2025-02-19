// let arr = ["Krishna", "Ram", "Shayam", "Radha"];
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i].toUpperCase());
// }
// console.log(newArr);

// const arr = ["krishna"];
// for(newArr of arr){
//     console.log(newArr);
// }


/* function add(){
    let x =5;
    let y = 10;
    let z = x+y;
    console.log(z);
}
add(); */
/* function add(x, y){
    let xy = x+y;
    console.log(xy);
}
add(10,20);
 */
// function fullName(firstName, lastName){
//     let printfullName = firstName + " " +lastName;
//     return printfullName;
// }
// console.log(fullName("Krishna", "Kumar"));

// let arr = [1, 3, 4, 5, 6];
// function sumOfArray(arr){

//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum+arr[i];

//     }
//     return sum;
// }
// let result = sumOfArray(arr);
// console.log(result);

/* let arr = ["krishna", 10, 20, "Ram", "Shyam", true, false, bool];
let newArr = [];
for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === "string"){
        newArr.push(arr[i]);
    }
}
console.log(newArr); */
/* let arr = ["krishna", 10, 20, "Ram", "Shyam", true, false, true];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    // Check the type of each element in the array
    if (typeof arr[i] === "string") {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
 */
// let isEven = (element)=>{
//     return element%2 == 0;

// };
// let value = [2, 4, 6, 8].every(isEven);
// console.log(value);

//setTimeout
// function time(){
//     console.log("hello Developer");

// }
// setTimeout(time,3000);

//map
// let number = [1, 2, 3, 4, 5];
// let store = number.map((num)=>num*num);
// console.log(store);

// let arr = [1, 2, 3, 4, 5];
// let [a, b, c, d] = arr;
// console.log(c);

/* let person = new Object();
person.name = "Krishna";
console.log(person);
 */

/* let a = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8];
let num = new Set(a);
console.log(num);
 */
// function outer(){
//     let value = "Hi";
//     function inner(){
//         console.log(value);
//     }
//     inner();
// }
// outer();
//----------------------------------------------------------Exception Handling

// try {
//     // Code that might throw an exception
//     let result = 10 / 0; // This will throw a division by zero exception
//     console.log(result); // This line won't be executed
//   } catch (error) {
//     // Code to handle the exception
//     console.error("An error occurred:", error.message);
//   } finally {
//     // Code that will always be executed, whether there's an exception or not
//     console.log("Finally block executed");
//   }
    

// function validateNumber(value) {
//     if (typeof value !== 'number') {
//       throw new Error('Invalid number');
//     }
//     return value;
//   }
  
//   try {
//     let result = validateNumber("abc");
//     console.log(result); // This line won't be executed
//   } catch (error) {
//     console.error("An error occurred:", error.message); // Output: An error occurred: Invalid number
//   }


// class in js
//syntax
// class className{
//     constructor(parameter){
//         this.className = parameter;
//     }
// }


// class User{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let user1 = new User("Krishna", "Kumar");
// console.log(user1);

// class Car{
//     constructor(name, model){
//         this.name = name;
//         this.model = model;
//     }
// }
// let  car1 = new Car("odde", "2023");
// console.log(car1);
// console.log(car1.name);
// console.log(car1.model);

// prototype in js


var Laptop = function(Lname, Lcolor, Lprice){
    this.name = Lname;
    this.color = Lcolor;
    this.price = Lprice;
}
var Asus = new Laptop("vivoBook", "Silver", "65000");
var Dell = new Laptop("D2S500", "Silver", "66000");
var Apple = new Laptop("MacBook pro", "Silver", "170000");
console.log(Asus);