# Type Coercion in TypeScript

This repository demonstrates a common yet subtle issue in TypeScript: type coercion leading to runtime errors.

## The Bug
The `add` function is declared to accept two numbers and return a number. However, the code calls `add` with a string and a number. TypeScript doesn't prevent this, and the `+` operator performs string concatenation, leading to an unexpected result at runtime.

## The Solution
The solution involves using type guards or narrowing to ensure that the function receives only numbers.

## How to Run
1. Clone this repository.
2. Run `tsc bug.ts` to compile the code with the bug.
3. Run `node bug.js` to observe the runtime error.
4. Run `tsc bugSolution.ts` to compile the code with the solution.
5. Run `node bugSolution.js` to see the correct behavior.