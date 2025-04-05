// Declare a variable let arraySize = 25;. Using a for loop, add numbers from one
//  onwards into an array till the arraySize is reached.

let arraySize = 25;
let final_array = []

for( let i = 0; i < arraySize ; i++){
  final_array.push(i+1)	
}
console.log(final_array)


// Using while loop
let j = 1;
let final_added_val = 0
while(j <= arraySize){
  final_added_val += j
  j++;
}
console.log(final_added_val)