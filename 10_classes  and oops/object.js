function shubham(num){
    return num*5
}

shubham.power = 3

console.log(shubham.power);
console.log(shubham(5));
console.log(shubham.prototype);


function createUser(username,score){
    this.username = username 
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

//"new" keyword is used for introducing the prototype methods
const chai = new createUser("chai" , 35)
const tea  = new createUser("tea" , 350)





chai.printMe()  // way to print new prototype created

