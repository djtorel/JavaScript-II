// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const muliply = x => y => x * y;
const multiply10 = muliply(10);
console.log(multiply10(4));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks
for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter
  // variable.
  let iterator = 1;
  return () => iterator++;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment
// and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return
  // it. `decrement` should decrement the counter variable and return it.
  let iterator = 0;
  return {
    increment: () => ++iterator,
    decrement: () => --iterator,
  };
};

console.log('Factory');
const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
