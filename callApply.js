const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips=0, tax=0){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}


// normalPerson.chargeBill.call(heroPerson, 900, 90, 10);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);


normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);

//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);


// const friendGetFullName = normalPerson.getFullName.bind(friendlyPerson);
// friendGetFullName();

// console.log(normalPerson.salary);
// normalPerson.chargeBill(150);
// console.log('after chargeBill 150');
// console.log(normalPerson.salary);

// normalPerson.chargeBill(150);
// console.log('after another chargeBill 150');
// console.log(normalPerson.salary);

