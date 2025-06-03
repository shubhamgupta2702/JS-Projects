// let myName = "Shubham     "

// console.log(myName.truelength());



let myHeros = ["thor" , "Ironman"]

let heroPower = {
    thor: "hammer" , 
    Ironman: "Jarvis",

    getThorPower: function(){
        console.log(`Thor Power is ${this.thor}`);
        
    }
}

// Injecting  a prototype from user side..

Object.prototype.shubham = function(){
    console.log(`Shubham Is back guyss !!!`);
    
}
Array.prototype.Neon = function(){
    console.log(`Neon on fire!!`);
    
}

heroPower.shubham()

// array also get the properties of the objects.
myHeros.shubham()
myHeros.Neon()
// heroPower.Neon()    // object cannot get the property of arrays prototype.


//Inheritance

const user = {
    name: 'neon',
    email: 'neon@Fb.com'
}

const Teacher = {
    makeVideos: true
}

const TeacingSupport = {
    isAvailable: true
}

const TASupport =  {
    makeAssignmen: 'JS Assignment',
    fullTime: true,
    __proto__:TeacingSupport
}

Teacher.__proto__ = user  //outdated approach.!!

// mordern syntax
Object.setPrototypeOf(TeacingSupport, Teacher)

let anotherUsername = "NeonOp         "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}
anotherUsername.truelength()
"shubham".truelength()
"FF Neon".truelength()