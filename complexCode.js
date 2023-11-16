/*
 * Filename: complexCode.js
 * Description: This code demonstrates a complex and elaborate JavaScript implementation that uses various concepts and techniques.
 */

// Global variables
let num1 = 5;
const num2 = 10;

// Class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Function to calculate factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(n) {
  if (n === 1 || n === 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Mapping array elements using arrow function
const mappedNumbers = numbers.map((num) => num * 2);

// Creating an instance of Person class
const john = new Person("John", 25);

// Execute functions and display results
console.log("Factorial of 5:", factorial(5));
console.log("Is 7 prime?", isPrime(7));
console.log("Mapped numbers:", mappedNumbers);
john.displayDetails();

// Promises example
const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timer completed!");
  }, 2000);
});

timerPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Event handling example
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// Advanced array manipulation
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const mergedArray = [...evenNumbers, ...oddNumbers];
const filteredArray = mergedArray.filter((num) => num > 5);
const sortedArray = filteredArray.sort((a, b) => b - a);

console.log("Merged array:", mergedArray);
console.log("Filtered array:", filteredArray);
console.log("Sorted array:", sortedArray);

// Complex algorithm: Fibonacci series
function fibonacci(n) {
  const fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray.slice(0, n);
}

console.log("Fibonacci series:", fibonacci(10));

// More complex code...
// ... (continue with more code beyond 200 lines)