//-------------------------------------------------------------------------
// Ques 1: Map vs forEach ?
// const array = [1, 2, 3, 4, 5];
// const sqrt = array.map((num) => num * num);
// console.log(sqrt);

// second way
// const number = [1, 2, 3, 4, 5];
// const sqr = number.map((num)=>{
//     return num*num;
// });
// console.log(sqr)
//---------------------------------------------------------------------------

// forEach method
// let array = [1, 2, 3, 4, 5];
// array.forEach((num)=> console.log(num));

/* let array = [1, 2, 3, 4, 5];
array.forEach((num, index, newArray)=>{
     return newArray[index] = num*2;
});
console.log(array);//
 */

// sum of give array
/* const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log(sum); */


//-------------------------------------
//let variable; // variable is undefined
// function doSomething(value) {
//   console.log(value); // value is undefined if not provided
// }
// doSomething();
/* 
var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object

console.log(null === undefined) // false (not the same type)
console.log(null == undefined) // true (but the "same value")
console.log(null === null) // true (both type and value are the same) */

// flatten array
/* let arr = [[1, 2], [2, 4], [4, 5], [6, 7]];
let newArray = [].concat(...arr);
console.log(newArray); */


// setTimeout
// function check(){
//   for(let i = 0; i<=5; i++){
//     setTimeout(function value(){
//       console.log(i)
//     }, i*1000);
//   }
//   }
//   check();
// //output 0 1 2 3 4 5

// const timeoutId = setTimeout(function() {
//   console.log("This won't be displayed");
// }, 1000);


// Call, Apply, Bind, in javascript .
function sum(a, b) {
  return a + b;
}

const numbers = [5, 3];
const result = sum.apply(null, numbers);

