// 1. How will you create a new copy of the object below while updating the value of
// address.details[0] to "5"?
let user_obj = {
  name:"Harry Potter",
  age: 12,
  address: {
  details: ["4", "Privet Drive"],
  area:"Little Whinging",
  city: "Surrey",
  state: "England"
  }
};
// Using structuredClone will clone the object and creates a new copy which reference to a new in-memory location
// and does not affect the original object.
function makeCopy(user_object) {
  let copied_user = structuredClone(user_object);
  user_object.address.details[0] = "5";
  return copied_user;
};

let updated_user = makeCopy(user_obj);
console.log(updated_user);
console.log(user_obj);

// 2. Write a function filterObj that will filter out all the keys of a flat object that have
// objects or arrays using Object.keys and Object.entries. Example:
let obj = {
 a:"Apple",
 b:["Basketball","Baseball"],
 c: {
     call: "cellphone"
   },
 d: "Dog"
}
// This function is to show the usecse of Object.keys(obj) to get the keys of the object
function filterObjectkeys(input_obj) {
  return Object.keys(input_obj)
};

// here we are using Object.entries to filter the object on the basis of the key and value
function filterObject(input_obj) {
  return Object.fromEntries(Object.entries(input_obj).filter(item => typeof(item[1]) === 'string' ));
};

// filterObject(obj) //This should return {a:"Apple", d:"Dog"}
// filterObjectKeys(obj) //This should return ["a", "b", "c", "d"]