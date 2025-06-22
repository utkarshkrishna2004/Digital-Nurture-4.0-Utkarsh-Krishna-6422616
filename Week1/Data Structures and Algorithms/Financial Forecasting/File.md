## 1. Understanding Recursive Algorithms

Recursion is a technique where a function calls itself to solve smaller instances of a problem. It simplifies problems that are naturally repetitive or hierarchical. In financial forecasting, recursion can model compounding processes, making the logic easier to express and understand.

---

## 2. Setup

A recursive method is used to compute the future value of an amount based on a consistent growth rate over a period of years.

---

## 3. Implementation

Using historical financial data, the average growth rate is calculated and used to project future values recursively. This allows forecasting based on patterns observed in past data.

---

## 4. Analysis

### Time Complexity

- The recursive method has a time complexity of **O(n)**, where _n_ is the number of years being projected.
- Each recursive call performs a constant amount of work.
- Without optimization, recursion may lead to redundant computations if the same values are recalculated.

### Space Complexity

- Due to recursive calls, the space complexity is also **O(n)** because of the call stack.

---

## Optimization

To prevent excessive computation and stack overflow:

- **Memoization** can store previously computed results, reducing redundant calculations.
- **Iteration** can replace recursion to save stack space and improve performance.

---

## Conclusion

Recursion provides a clean and intuitive way to model financial projections, but it should be optimized in real-world scenarios for efficiency. Memoization or converting to an iterative solution are practical strategies to enhance performance.