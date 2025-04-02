// 1. Declare a variable let age = 25;. Write a series of if else statements that will:
//    ○ Print child to the console if age is less than equal to 12.
//    ○ Print teen to the console if age is between 13 and 18 (inclusive).
//    ○ Print adult to the console if age is above 18

let age = 25;
if (age <= 12){
  console.log("child");
}else if (age >= 13 && age <=18){
  console.log("teen");
}else{
  console.log("adult");
}

// Using Switch Case
switch (age) {
  case (age <= 12):
    console.log("child");
    break;
  case (age >= 13 && age <=18):
    console.log("teen");
    break;
  default:
    console.log("adult");
    break;
}

// 5. here we cannot use 'return' instead of 'break' in switch case because 'break' is used to exit the code 
//    when condition is matched and stops other cases to get executed in this, where as 'return' is used in returning 
//    a value from a function and exit the function.