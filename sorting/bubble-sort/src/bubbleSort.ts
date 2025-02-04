/**
 * bubbleSort.ts - Implementation of the Bubble Sort Algorithm in TypeScript
 *
 * Description:
 * - Bubble Sort is a simple comparison-based sorting algorithm that repeatedly
 *   iterates through the array, swaps adjacent elements if they are in the
 *   wrong order, and moves the largest element to the end in each iteration.
 *
 * Time Complexity:
 * - Worst Case: O(N^2) (When the array is reverse sorted)
 * - Average Case: O(N^2) (For a randomly shuffled array)
 * - Best Case: O(N) (When the array is already sorted)
 *
 * Space Complexity:
 * - O(1) (In-place sorting algorithm)
 *
 * Metadata:
 * - Author: Kanagaraj N N
 * - License: MIT
 */

/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param arr - The array to be sorted.
 */
export function bubbleSort(arr: number[]): void {
    if (!arr || arr.length === 0) return;

    let n = arr.length;
    let swapped: boolean;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
                swapped = true;
            }
        }
        if (!swapped) break; // Stop if already sorted
    }
}
