/*
Filename: SophisticatedCode.js

Content: 

This script performs a sophisticated algorithm to determine if a given number is a prime number.
It implements the Sieve of Eratosthenes algorithm, a widely used and highly efficient method to find all prime numbers up to a given limit.

Notes: 
- The code is organized into multiple functions to improve readability and maintainability.
- Precise comments are provided to help understand the logic and flow of the algorithm.
- The code employs well-known best practices and naming conventions.

*/

// Function to check if a number is prime
function isPrime(num) {
  // 1 and negative numbers are not prime
  if (num <= 1) {
    return false;
  }
  // 2 and 3 are prime numbers
  if (num <= 3) {
    return true;
  }
  // Numbers divisible by 2 or 3 are not prime
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  // Check divisibility by numbers of the form 6k ± 1, up to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  // If none of the above conditions occur, the number is prime
  return true;
}

// Function to generate prime numbers up to a given limit using the Sieve of Eratosthenes algorithm
function generatePrimeNumbers(limit) {
  const primes = [];
  const primeFlags = new Array(limit + 1).fill(true); // Boolean array to track prime numbers

  primeFlags[0] = false;
  primeFlags[1] = false;

  // Perform the Sieve of Eratosthenes algorithm
  for (let p = 2; p * p <= limit; p++) {
    if (primeFlags[p]) {
      for (let i = p * p; i <= limit; i += p) {
        primeFlags[i] = false;
      }
    }
  }

  // Collect all prime numbers into a separate array
  for (let p = 2; p <= limit; p++) {
    if (primeFlags[p]) {
      primes.push(p);
    }
  }

  return primes;
}

// Example usage
const limit = 1000;
const primeNumbers = generatePrimeNumbers(limit);

// Output the generated prime numbers
console.log(`Prime numbers up to ${limit}:`);
console.log(primeNumbers);

// Check if a specific number is prime
const numberToCheck = 137;
console.log(`${numberToCheck} is prime? ${isPrime(numberToCheck)}`);