class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }

    static createId(){   // static keyword do not give access to everyone.
        return `123`
    }
}

const shubham = new User("shubham")

// console.log(shubham.createId())    // static keyword do not give access.

class Teacher extends User{
    constructor(username , email) {
        super(username)
        this.email = email
    }
}

const book = new Teacher("book"  , "book@email.com" )
book.logMe()
// console.log(book.createId());    //static keyword do not give access here for any inheritence.
