const user = {
    username: "shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from databse');
        console.log(`Username: ${this.username}`);  // this is used to define the current context.
        console.log(this);
        
        
        
    }
}

console.log(user.username);
//  console.log(user.getUserDetails());
 console.log(this);
 
// new is called constructor function here!!
//  const promiseOne = new Promise()
//  const date = new Date()

 function User(username , loginCount , isLoggedIn){
    this.username = username  // this used to point the username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
 }

 const User1 = new User("shubham" ,3, true )
 const user2 = new User("chaiaurme" , 5, false) // value get override here.  soo we use constructor function.

 // now both the values are printed.
 console.log(User1.constructor);
//  console.log(user2);
 