//object
//object literal

// const  user = {
//     Name: "Kirshna",
//     Address : "BR",
//     Email : "abc@mail.com",
//     Num : 6201654800
// }
// console.log(user);
// console.log(user.Address);//access teh value by dot notation.
// console.log(user["Address"]);


//const app = new object()// singleton obj

// object de-structure

const course = {
    courseName: "Js",
    price: "2999",
    courseInstructor: "abc",
    duration: "45 Days"
}
const {courseInstructor} = course
console.log(courseInstructor);
