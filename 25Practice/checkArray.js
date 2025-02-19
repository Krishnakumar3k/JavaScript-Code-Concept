// How to check if an object is an array or  not ? 
const checkArray = (elem)=>{
    return(
        Array.isArray(elem)
        
    );
   console.log(Array.isArray(elem));

}
console.log(checkArray([]))
console.log(checkArray({}))
// checkArray({})