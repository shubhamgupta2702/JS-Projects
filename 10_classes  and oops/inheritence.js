class User {
    constructor(username){
        this.username = username
    }

    logInKro(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username)           // super keywords automatically access to the user class constructor.
        this.email = email
        this.password = password
    }
    addingCourse(){
        console.log(`New Course was added by ${this.username}`);
        
    }
}

const neon = new Teacher("neon" , "neon@gmail.com" , "2345")

neon.logInKro()


const vashu = new User("vashuji")

// vashu.addingCourse()
vashu.logInKro()


console.log(neon instanceof Teacher);
