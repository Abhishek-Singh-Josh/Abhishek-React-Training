// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed

let req_err = [];
 
class Validator {
  
  fillData(name, email, phoneNumber) {
    this.name = name
    this.email = email
    this.phone_number = phoneNumber
  }
  
  required() {
    
    if (this.name === '' || this.name === null) {
      req_err.push('name is missing');
    };
    
    if (this.email === '' || this.email === null) {
      req_err.push('email is missing');
    };
    
    if (this.phone_number === '' || this.phone_number === null) {
      req_err.push('phone number is missing');
    };
    
    this.errors = req_err
  }
  
  minLength() {
    if (this.phone_number.length < 4){
      req_err.push('Phone Number cannot be less than 4 digits')
      this.errors = req_err;
    }
  }
  
  maxLength() {
    if (this.phone_number.length > 13){
      req_err.push('Phone Number is too long')
      this.errors = req_err;
    }
  }
  
  isValid(newUser) {
    newUser.required()
    if (this.errors.length === 0){ newUser.minLength() }
    if (this.errors.length === 0){ newUser.maxLength() }
    console.log(this.errors)
    console.log( this.errors.length === 0 ? true : false );
  }
  
}

user = new Validator()
user.fillData('Rajiv', 'rajiv@mail.com', '9988776655443445')
user.isValid(user)