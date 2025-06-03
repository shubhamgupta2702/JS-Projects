const User = {
    _email: 'shubham@.com',
    _password: "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const panda = Object.create(User)
console.log(panda.email);
