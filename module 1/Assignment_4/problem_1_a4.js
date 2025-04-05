// 1.What is the difference between ++i and i++?
// => ++i is a pre-increment operators, i.e. it increments first and then assigns then returns the value
//    for example: let i = 1;
//                 console.log(++i); This will return 2
// => i++ is a post-increment operator, i.e. it returns the old value first and then increments itself.
//    for example: let i = 1;
//                 let some_var = console.log(i++);
//                 console.log(some_var); //This will return 1
//                 conole.log(i); //This will return 2


// 2. What do you think would happen if you pass an index beyond the range of the string? Or
//    if you pass a negative index? Try it out.
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[10]); //This will return undefined
console.log(arr[-1]); //This will return undefined
console.log(arr[0]); //This will return 1
console.log(arr[9]); //This will return 10

// 3. Do you think JSON.stringify would work for arrays as well? What about nested objects?
// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 
console.log(JSON.stringify(arr)); // it returns the array as it was

let nested_obj = {key1: {a:1,b:2}, key2: {c:3,d:4}};
console.log(JSON.stringify(nested_obj)) // it returns the object as {"key1":{"a":1,"b":2},"key2":{"c":3,"d":4}}

console.log(JSON.stringify(10)); // it returns 10
console.log(JSON.stringify("Hello Guyz")); // it returns "Hello Guyz"
console.log(JSON.stringify(undefined)); // it returns undefined
console.log(JSON.stringify(null)); // it returns null

// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such
// an invalid function runs in the program? Will other parts of the code execute correctly after
// that?
