const userOne = ()=>{
    console.log("This is user one");
};

const userTwo = ()=>{
    console.log("This is User two")
    setTimeout(()=>{
        console.log("This is insider User");
    },2000);
};

const userThree = ()=>{
    console.log("This is user Three");
};
userOne();
userTwo();
userThree();

// console.log('Start');

// // Asynchronous operation (simulated with setTimeout)
// setTimeout(function () {
//     console.log('Asynchronous operation completed');
// }, 2000);

// console.log('End');