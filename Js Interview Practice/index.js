//HOF 
//Callback
 // A callback back is a function which can be passed as parameter to another function.
//  function greet(userName, callback){
//     console.log("Hello", userName)
//     callback();
//  }
//   function callback(){
//     console.log("I am callback");
//   }
//  greet("KRISHNA",  callback);
//-----------------------
// const callback = (n)=>{
//     return n**2
// ;}
// function sqr(callback, n){
//     return callback(n)*n
// }
// console.log(sqr(callback,5));  


/* function goRun(){
    console.log("start Running");
}

setTimeout(goRun,2000);
 */
/* const userName = ()=>{
 
      for(let i = 0; i<=5; i++){
            console.log("Hello Krishna");
        }
    } */
    // setTimeout(()=>{
    //     const userName = ()=>{
 
    //         for(let i = 0; i<=5; i++){
    //               console.log("Hello Krishna");
    //           }
    //       }
    //       userName();
    // },2000);

//foreach
//It is work with aaray
// const arr = ["Hey", "Hello", "Hi", "Hola"];
// arr.forEach((value)=>{
//     console.log(value);
// })
// let countery = ["India", "Nepal", "Japan", "Russia", "England"];
// let  store = countery.filter((countery)=>countery.includes("an"));
// console.log(store);



// Use filter to create a new array containing only even numbers
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let printEvenNum = arr.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(printEvenNum);

//sort
// let names = ["Krishan","Shaym","Radha", "Jaya"];
// console.log(names.sort());

// Destructurinig 
// let scivalue = [1, 3.14, 9.18, 37,100];
// let [e, pi, gravity, bodytemp, boil] = scivalue;
// console.log(boil);

// Spread and rest operator
// let numlist1 = [1,2,3,4,5];
// let numlist2 = [6,7,8,3,9];
// let newList = [...numlist1, ...numlist2];
// console.log(newList);

/* function sum(x,y){
    return x+y;
}
let value = [2,6];
console.log(sum(...value)); */

  //async and await 
   