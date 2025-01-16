# TDD-Kata
A String Calculator

This project implements a String Calculator that performs summation based on different delimiter rules. It is a coding exercise often used to practice TDD (Test-Driven Development).

## **Features**
- Adds numbers provided in a delimited string.
- Supports:
1. Default delimiters: , (comma) and \n (newline).
2. Custom single-character delimiters (e.g., //;\n1;2).
3. Multiple custom single-character delimiters (e.g., //[*][%]\n1*2%3).
4. Ignoring numbers greater than 1000.
- Throws errors for negative numbers, listing all negative values in the error message.

### **How to use**
1. Clone the repository:
2. Install dependencies:
    `yarn install`
3. Run the tests:
    `yarn test`

### ** Screenshots **

<img width="838" alt="Screenshot 2025-01-16 at 7 21 31 PM" src="https://github.com/user-attachments/assets/6a7f32c0-5300-4308-a2ce-0e0498f5f73b" />

### ** Examples ** 

const calculator = new StringCalculator();

// Default delimiters
console.log(calculator.add("1,2,3")); // Output: 6

// Custom single-character delimiter
console.log(calculator.add("//;\n1;2")); // Output: 3

// Multiple single-character delimiters
console.log(calculator.add("//[*][%]\n1*2%3")); // Output: 6

// Ignoring numbers > 1000
console.log(calculator.add("2,1001")); // Output: 2

// Throws error for negative numbers
console.log(calculator.add("-1,2,-3")); // Throws: Negative numbers not allowed: -1, -3

### **Run Tests**
The project uses Jest for unit testing. To run the tests:
    `yarn test`

## **Project Structure**
- StringCalculator.ts: Implementation of the String Calculator.
- StringCalculator.test.ts: Unit tests for the calculator.
