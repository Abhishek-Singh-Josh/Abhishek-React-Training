// Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

// function* fibbGen(i , k) {
//   j = 1;
//   mid = Math.ceil(k/2);
//   if (k % 2 === 0) {
//     while(j <= k) {
//       if(j <= mid){
//         yield i++;
//         j++;
//       } else{
//         yield --i;
//         j++;
//       }
//     }
//   }else {
//     while(j <= k) {
//       if(j < mid){
//         yield i++;
//         j++;
//       } else if (j === mid){
//         yield i;
//         j++;
//       }else{
//         yield --i;
//         j++;
//       }
//     }
//   }
// }

// const newObj = fibbGen(2,4);
// console.log(newObj.next())

// i = initial value to start with
// k = length of fibbonaci number to be generated

// function* fibbGen(n) {
//   let prev_val = 0
//   let next_val = 0
//   i = 0;
//   j = 0;
  
//   while (j < 8) {
//     if (j < 2){
//       next_val = i;
//       yield i++;
//       j++;
//     }else {
//       ex_prev_val = prev_val;
//       yield prev_val + next_val;
//       prev_val = next_val;
//       next_val = ex_prev_val + next_val;
//       j++;
//     }
//   } 
// }