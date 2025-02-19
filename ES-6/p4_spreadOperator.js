const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
