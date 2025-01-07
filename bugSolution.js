function foo(a, b) {
  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric values
  }
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Add numbers if they are valid
}

//test cases
console.log(foo(5, 3)); // Output: 8
console.log(foo(null, 5)); // Output: null
console.log(foo('abc', 5)); // Output: NaN
console.log(foo(5, 'abc')); // Output: NaN