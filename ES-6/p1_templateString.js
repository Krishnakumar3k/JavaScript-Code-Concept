// old method-----------
// let user = "Krishna";
// console.log("Hello " + user);

// ES6 method
/* let user = "Krishna";
let userRole = "MERN Stack Developer"
console.log( `Hello my name is ${user} i am a ${userRole}`); */

// eg 2 using function
let firstName = "Krishna"
let lastName = "Kumar"
function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
 let result = `Hello ${fullName(firstName,lastName)}`;
 console.log(result)