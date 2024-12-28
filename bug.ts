function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // This will compile but runtime error will occur
console.log(result);