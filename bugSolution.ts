function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return add(a,b);
  } else {
    throw new Error("Invalid input types");
  }
}

const result1 = addSafe(5, 10); // Correct usage
const result2 = addSafe("hello", 10); //Throws Error
const result3 = addSafe(5, "hello"); //Throws Error
console.log(result1); // Output: 15