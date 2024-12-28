function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

let result = addSafe(10, 20); // Correct usage
console.log(result); // Output: 30

let result2 = addSafe("hello", "world"); //Safe usage
console.log(result2); // Output: helloworld

let result3 = add(10, "hello"); // This will still cause a compilation error
console.log(result3); 