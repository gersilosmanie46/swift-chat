/* filename: sophisticated_program.js */

// This program calculates the n-th Fibonacci number using a recursive method

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function printFibonacciSequence(limit) {
  console.log(`Calculating Fibonacci sequence up to ${limit}:`);
  for (let i = 0; i <= limit; i++) {
    console.log(`Fibonacci number at position ${i}:`, fibonacci(i));
  }
}

printFibonacciSequence(10);