class User{
    constructor(email,paswword){
        this.email = email,
        this.password = this.password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shubham`
    }

    set password (value){
        this._password = value
    }
}

const shubham = new User("shubham@g.openai" , "abc")
console.log(shubham.email);
