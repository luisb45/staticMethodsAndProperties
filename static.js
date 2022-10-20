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





//Hungry for More - Bank Account
class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(d) {
        this.balance = this.balance + d
        console.log('You have deposited', d)
        console.log('Your balance is now', this.balance)
    }
    withdraw(w) {
        this.balance = this.balance - w
        console.log('You have withdrawn', w)
        if (this.balance < 0){
            console.log('Your Checking Account has been overdrawn. Additional fees have been added to your account.')
            console.log('Your balance is now', this.balance)

        }
    }
};

class CheckingAccount extends BankAccount{
    
}

class SavingsAccount extends BankAccount{
    
}


let luis = new BankAccount('Luis', 25 , '63456256');


luis.deposit(10);
luis.withdraw(40);

