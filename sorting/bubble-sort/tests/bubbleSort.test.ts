/**
 * bubbleSort.test.ts - Unit Tests for Bubble Sort in TypeScript
 */

import { bubbleSort } from "../src/bubbleSort";

test("Sorts an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test("Sorts a reverse-sorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

test("Sorts an array with random order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    bubbleSort(arr);
    expect(arr).toEqual([11, 12, 22, 25, 34, 64, 90]);
});

test("Handles a single-element array", () => {
    const arr = [42];
    bubbleSort(arr);
    expect(arr).toEqual([42]);
});

test("Handles an empty array", () => {
    const arr: number[] = [];
    bubbleSort(arr);
    expect(arr).toEqual([]);
});

test("Sorts an array with negative numbers", () => {
    const arr = [10, -1, 3, 8, 5, 2, -3, 4];
    bubbleSort(arr);
    expect(arr).toEqual([-3, -1, 2, 3, 4, 5, 8, 10]);
});
