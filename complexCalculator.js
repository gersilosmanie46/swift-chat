```
/*
    Filename: complexCalculator.js
    Description: A complex calculator with advanced mathematical operations
*/

// Define the calculator class
class Calculator {
    constructor() {
        this.memory = 0;
    }

    // Addition method
    add(a, b) {
        return a + b;
    }

    // Subtraction method
    subtract(a, b) {
        return a - b;
    }

    // Multiplication method
    multiply(a, b) {
        return a * b;
    }

    // Division method
    divide(a, b) {
        return a / b;
    }

    // Exponential method
    power(base, exponent) {
        return base ** exponent;
    }

    // Get the square root
    squareRoot(number) {
        return Math.sqrt(number);
    }

    // Store a number in memory
    storeInMemory(number) {
        this.memory = number;
    }

    // Clear the memory
    clearMemory() {
        this.memory = 0;
    }
}

// Create a new instance of the calculator
const calculator = new Calculator();

// Example usage
console.log("Result of 5 + 3:", calculator.add(5, 3));
console.log("Result of 8 - 4:", calculator.subtract(8, 4));
console.log("Result of 6 * 2:", calculator.multiply(6, 2));
console.log("Result of 10 / 2:", calculator.divide(10, 2));
console.log("Result of 2 ^ 3:", calculator.power(2, 3));
console.log("Square root of 25:", calculator.squareRoot(25));
calculator.storeInMemory(42);
console.log("Value in memory:", calculator.memory);
calculator.clearMemory();
console.log("Value in memory after clearing:", calculator.memory);

// ... (more complex calculations and operations)
// ... (additional functionalities and methods)

// End of code
```