
// Solution 1 uses closures for private obects and properties
// Newpatient function takes in a name and ssn
const newPatient = (name, ssn) => {
    
    //Object with name and ssn keys only accessible within this function
    const PII = {
    name: name,
    ssn: ssn
    };

    //returns public functions that have access to the the PII object due to scoping
    return {getName: () =>  PII.name,
            getSNN: () => undefined
    }
}

//creating patient
const patient2 = newPatient("John", '123-45-6789');

//testing
console.log(patient2.name); // outputs undefined
console.log(patient2.ssn); // outputs undefined
console.log(patient2.getName()); //outputs John
console.log(patient2.getSNN()); //outputs undefined




//Solution 2
//Experimenting with Private Properties which get created by using a hash prefix #
class NewPatient {
    #name;
    #snn;

    constructor(name, ssn) {
        this.#name = name;
        this.#snn = ssn;
    }

    get getName() {return this.#name}
    get getSSN() { return this.#snn} //Made SSN public this time
}

const patient3 = new NewPatient("Dan", "147-53-9899");

console.log(patient3.name); //outputs undefined
console.log(patient3.getName); //outputs Dan
console.log(patient3.snn); //outputs undefined
console.log(patient3.getSSN); //outputs 147-53-9899

//Please give feeback on best practices for using hash prefix for private properties and cases where its better over closure method and vice versa
