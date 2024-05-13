

class Person {

    //constructor that takes in name job and age
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    //Exercise method
    exercise() {console.log(`${this.name} heads to the gym to exercise 5 times a week.`);}

    //fetchjob method 
    fetchJob() { console.log(`${this.name} is a ${this.job}.`); }
}

//Programmer is a child of Person
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;

        //busy property set to true by default, 
        this.busy = true;
    } 

    //Method updates busy value to false
    completeTask() {
        this.busy = false;
    }

    //Method updates busy to true
    acceptNewTask() {
        this.busy = true;
    }

    //Checks busy state, then logs based on state
    offerNewTask() {
        if(this.busy) {console.log(`${this.name} can't accept any new tasks right now.`); }
        else { console.log(`${this.name} would love to take on a new responsibility.`); }
    } 

    //Method accepts a langage and adds it to the languages array;
    learnLanguage(language) {this.languages.push(language); }

    //List languages in languages array
    listLanguages() { return this.languages.join(", ")}
}


const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages()); //outputs HTML, C#, #CSS
console.log(c2.listLanguages()); //outputs HTML, SASS, Ruby, C++
console.log(c3.listLanguages()); //outputs HTML, CSS, JS, R, Java
console.log(person1); //outputs  Person { name: 'Harold', job: 'Backend Engineer', age: 20 }
console.log(c1); //outputs progammer object
console.log(c2); //outputs progammer object
console.log(c3); //outputs progammer object
person1.exercise(); //outputs Harold heads to the gym to exercise 5 times a week
person1.fetchJob(); //outputs Harold is a Backend Engineer.

//Testing completeTask method which updates busy state
c3.completeTask();
console.log(c3.busy) //outputs false
c3.offerNewTask(); //outputs Manny would love to take on a new responsibility
