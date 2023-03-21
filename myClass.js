class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `My name is ${this.firstName} ${this.lastName}.`;
    }
}

let myName = new User("raj","patel",23);
console.log(myName.getFullName());