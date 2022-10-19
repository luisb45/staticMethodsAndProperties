//Governor class
class Governor {
    static canImplementLaws() {
        console.log('true')
    }
    static enforceLaws() {
        console.log('Follow the law!')
    }

}
Governor.canImplementLaws();
Governor.enforceLaws();




//Base class
class Person {
    constructor(name, eyeColor, hairColor){
        this.name = name;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
    greeting() {
        console.log('Hello my name is', this.name)
    }
    eatfood() {
        console.log('Yumm')
    }
    isAlive() {
        console.log('true')
    }
};

//Postal Worker class
class PostalWorker extends Person {
    deliverMail() {
        console.log('Your mail has been delivered by', this.name)
    }
};

//Chef class
class Chef extends Person {
    cookMeal() {
        console.log(this.name,'has prepared your food')
    }
};

//Postal Workers
let steve = new PostalWorker('Steve', 'blue', 'black');
let billy = new PostalWorker('Billy', 'black', 'silver');

//Chefs
let bob = new Chef('Bob', 'black', 'blonde');
let pepe = new Chef('Pepe', 'brown', 'black');

//tests
console.log(steve);
console.log(bob);
console.log(steve.greeting());
console.log(billy.deliverMail());
console.log(pepe.cookMeal());




//Hungry for More
class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit() {

    }
    withdraw() {

    }
};

class CheckingAccount extends BankAccount{
    
}