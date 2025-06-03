//ES6

// class User{
//     // whenever "new" keyword is used constructor is called.
//     constructor(username , email , password){
//         this.username = username
//         this.email  = email
//         this.password = password
//     }

//     encryptPassword(){   // method
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const panda = new User("panda" , "panda@gmail.com" , "123")
// console.log(panda.encryptPassword());
// console.log(panda.changeUsername());


//Behind The Scene.

function User(username , email , password){
        this.username = username
        this.email  = email
        this.password = password
}
const panda2 = new User("pandasecond" , "panda@gmail.com" , "123")


User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

console.log(panda2.encryptPassword());
console.log(panda2.changeUsername());
