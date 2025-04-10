// Assignments:
let user_arr = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31"
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23"
}, {
"id": 5,
"first_name": "Venita",
"email": "vheap4@clickbank.net",
"date_of_birth": "2020/10/04"
}, {
"id": 6,
"first_name": "Fairfax",
"email": "fcrichton5@merriam-webster.com",
"date_of_birth": "2009/12/23"
}, {
"id": 7,
"first_name": "Kathleen",
"email": "kvasyukhnov6@devhub.com",
"date_of_birth": "2010/12/20"
}, {
"id": 8,
"first_name": "Sam",
"email": "scorck7@sitemeter.com",
"date_of_birth": "2020/08/30"
}, {
"id": 9,
"first_name": "Virgilio",
"email": "vferandez8@e-recht24.de",
"date_of_birth": "2000/09/07"
}, {
"id": 10,
"first_name": "Townie",
"email": "tpetyt9@upenn.edu",
"date_of_birth": "2018/09/01"
}]

// 1. Take the above array of objects. Accomplish the following tasks:

// ○ Write a function filterByName that accepts a string as a parameter and returns an
//   array with only those objects where the first_name field includes that string.

function filterByName(name) {
  return user_arr.filter(obj => obj.first_name.includes(name));
}

let filteredData = filterByName("V");
console.log(filteredData);

// ○ Use Array.map to return an array of all the email fields.
let all_user_email = user_arr.map(obj => obj.email);
console.log(all_user_email);

// ○ Use Array.sort to return the array sorted in descending order by date_of_birth. ○
let sortByDob = function dobSortFunc() {
return user_arr.sort((first, second) => first.date_of_birth > second.date_of_birth ? 1 : -1);
};
console.log(sortByDob());

// Write a function getById that accepts a number as a parameter and returns the
// object where the id is equal to that number.
function getById(num_id) {
  return user_arr.find(item => item.id == num_id);
};
let getId = getById(4);
console.log(getId);

// 2. What makes a method mutating or non mutating in Javascript? Find out whether each of
// the following methods are mutating or non-mutating. How can you verify this?: 

// ○ push - this is a mutating method because it is used to add elements in an array,
//          which finally modifies the same array.

let arr = [1, 2, 3];
let final_arr = arr.push(4);
console.log(arr);
console.log(final_arr);

// ○ pop - this is a mutating method because it is used to remove elements from an array,
//          which finally modifies the same array.
arr = [1, 2, 3];
final_arr = arr.pop();
console.log(arr);
console.log(final_arr);

// ○ filter - this is a non-mutating method because it return a new array with filtered
//            data on the basis of filter conditions.
arr = [1, 2, 3, 4, 5];
final_arr = arr.filter(item => item > 2);
console.log(arr);
console.log("filter data:",final_arr);

// ○ find - this is a not-mutating method because it returns the first element that satisfies the find condition
arr = [1, 2, 3, 4, 5, 6];
final_arr = arr.find(item => item < 2);
console.log(arr);
console.log(final_arr);

// ○ sort - this is a mutating method, because it sorts the original array also when applied.
arr = [4, 5, 1, 3, 2];
console.log("before sorting:", arr);
final_arr = arr.sort((a, b) => a - b);
console.log(arr);
console.log(final_arr);

// ○ map - this is a non-mutating method because it returns a new array with the results of calling
//          a provided function on every element in the calling array.
arr = [1, 2, 3, 4, 5];
final_arr = arr.map(item => item * 2);
console.log(arr);
console.log(final_arr);