// 1. Write a function mapBy to convert an array of objects into an object mapped by the
// specified key:
// Example:
let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}];

//This should return
//{
// “Nicki”:{id:1, first_name:”Nicki”, ...},
// “Raychel”:{id:2, first_name:”Raychell”, ...},
//}

function mapBy(arr, key) {
  return Object.fromEntries(arr.map(object => [object[key], object]));
}

mapBy(users, 'first_name');
