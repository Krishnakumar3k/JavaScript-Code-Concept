// ES6
// Rest and Spred Operator

/* function addNumbers(a,b,c){
return a+b+c;
}
let sum = addNumbers(2, 4, 5);
console.log(sum);
 */


function findHighestNumber(arr, index = 0, highest = -Infinity) {
    if (index === arr.length) {
      return highest;
    }
  
    if (arr[index] > highest) {
      highest = arr[index];
    }
  
    return findHighestNumber(arr, index + 1, highest);
  }
  
  // Get input from the user
  const input = prompt("Enter numbers separated by spaces: ");
  const numbers = input.split(" ").map(Number);
  
  const highestNumber = findHighestNumber(numbers);
  console.log("The highest number is:", highestNumber);
  