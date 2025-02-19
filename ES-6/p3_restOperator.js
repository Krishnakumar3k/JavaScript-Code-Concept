//----
/* function sum(){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i]
    }
    console.log(sum)
}
sum("Developer ",20,20);  */ // output 0Developer2020

//Rest Operator
function sum(name,...args){
    console.log(`Hello ${name} :`);

    let sum = 0;
    for(let i in args){
        sum += args[i]
    }
    console.log(sum)
}
sum("First Value",70,20); 
sum("Second Value",80,20); 