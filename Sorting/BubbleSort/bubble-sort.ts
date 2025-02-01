// Language: TypeScript
// Solution 1: Bubble Sort Algorithm 
// Time: Worst - O(N^2), Avg - O(N^2), Best - O(N)
// Space: O(1)

// Bubble Sort Function
function bubbleSort(array: number[]): number[] {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - counter - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}

// Main function to test sorting in VS Code
function main(): void {
  let array: number[] = [64, 34, 25, 12, 22, 11, 90];

  console.log("Original array:");
  console.log(array.join(" "));

  // Sort array using Bubble Sort
  let sortedArray: number[] = bubbleSort([...array]); // Clone array before sorting

  console.log("Sorted array:");
  console.log(sortedArray.join(" "));
}

// Run the main function when executing in VS Code
if (require.main === module) {
  main();
}

// Export for external testing
export { bubbleSort };
