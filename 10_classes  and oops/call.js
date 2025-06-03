function SetUsername(username){
    //complex DB Calls
    this.username = username
    console.log('called');
    
}

function createUser(username, email  , password){
    // SetUsername(username)   // its only reference given.
    SetUsername.call(this, username)  // first parameter gives the current execution context.'this' is the first parameter.
    this.email = email
    this.password  = password
    
}

const chai = new createUser("chaii" , "chai@fb.com" , "123")
console.log(chai);
