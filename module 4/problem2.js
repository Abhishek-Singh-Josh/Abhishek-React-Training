// Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

function* fibbGen(n) {
  let prev_val = 0
  let next_val = 1
  j = 0;
  
  while (j < n) {
    yield prev_val;
    [prev_val, next_val] = [next_val, prev_val + next_val]
    j++;
  }
  
}


const newObj = fibbGen(8);
console.log(newObj.next().value)  // 0
console.log(newObj.next().value)  // 1
console.log(newObj.next().value)  // 1
console.log(newObj.next().value)  // 2
console.log(newObj.next().value)  // 3
console.log(newObj.next().value)  // 5
console.log(newObj.next().value)  // 8
console.log(newObj.next().value)  // 13
console.log(newObj.next().value)  // undefined