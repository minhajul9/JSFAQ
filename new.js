class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}

const normalPerson = new Person('Rahim', 'Uddin', 25000);
console.log(normalPerson);

const heroAlom = new Person('Hero', 'Alom', 50000);
console.log(heroAlom);