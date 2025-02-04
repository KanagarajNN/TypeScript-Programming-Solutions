![TypeScript CI](https://github.com/kanagarajnn/typescript-programming-solutions/actions/workflows/ci-ts.yml/badge.svg)

# Bubble Sort Implementation in TypeScript

## Description
This project implements the **Bubble Sort** algorithm in TypeScript. Bubble Sort is a simple comparison-based sorting algorithm that repeatedly iterates through an array, swapping adjacent elements if they are in the wrong order. The algorithm continues iterating until no more swaps are needed, meaning the array is sorted.

## Features
- Implements Bubble Sort algorithm in TypeScript
- Handles various edge cases like empty arrays, already sorted arrays, and negative numbers
- Unit tested using **Jest** with **ts-jest**
- Structured for **modern TypeScript projects** with clear separation of source code and tests

## Time Complexity
- **Worst Case:** \(O(N^2)\) - When the array is reverse sorted
- **Average Case:** \(O(N^2)\) - For a randomly shuffled array
- **Best Case:** \(O(N)\) - When the array is already sorted

## Space Complexity
- \(O(1)\) (In-place sorting algorithm)

## Directory Structure
```
typescript-programming-solutions/
  ├── sorting/
  │   ├── bubble-sort/
  │   │   ├── src/
  │   │   │   ├── bubbleSort.ts
  │   │   ├── tests/
  │   │   │   ├── bubbleSort.test.ts
  ├── package.json
  ├── package-lock.json
  ├── tsconfig.json
  ├── jest.config.js
  ├── LICENSE
  ├── README.md
```

## Installation & Setup
Ensure you have **Node.js 18+** and **npm** installed.

### **1. Clone the repository**
```bash
git clone https://github.com/kanagarajnn/typescript-programming-solutions.git
cd typescript-programming-solutions
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Compile TypeScript files**
```bash
npm run build
```

## Running the Code
This project provides a simple Bubble Sort implementation in TypeScript.

### **Run the Bubble Sort algorithm**
```typescript
import { bubbleSort } from './sorting/bubble-sort/src/bubbleSort';

const arr: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);

bubbleSort(arr);

console.log("Sorted array:", arr);
```

### **Expected Output:**
```
Unsorted array: [64, 34, 25, 12, 22, 11, 90]
Sorted array: [11, 12, 22, 25, 34, 64, 90]
```

---

## Running Unit Tests
This project includes **Jest** tests using **ts-jest** to validate the correctness of the Bubble Sort algorithm.

### **Run tests using npm**
```bash
npm test
```

---

## Example Jest Test Case
Below is an example of a test case located in `tests/bubbleSort.test.ts`:

```typescript
import { bubbleSort } from '../src/bubbleSort';

test('Sorts an already sorted array', () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('Sorts a reversed array', () => {
  const arr: number[] = [5, 4, 3, 2, 1];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test('Sorts an unsorted array', () => {
  const arr: number[] = [3, 1, 4, 5, 2];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});
```

---

## Continuous Integration (CI) with GitHub Actions
This project is configured with GitHub Actions for automated testing.

### CI/CD Workflow Details:
- Runs tests automatically on every push and pull request to the main branch.
- Uses Node.js and TypeScript on an Ubuntu runner.
- Ensures code correctness before merging.

### How to Check CI/CD Status:
- Push your changes:
```sh
$ git push origin main
```
- Navigate to your GitHub repository → Actions tab.
- Check the workflow **TypeScript CI** to view test results.

---

## License
This project is licensed under the **MIT License**.

## Metadata
- Author: Kanagaraj N N
- Email: n.n.kanagaraj.upm@gmail.com
- GitHub: https://github.com/kanagarajnn

