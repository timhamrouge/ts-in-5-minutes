// tsc classes.ts => to run


// TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.

// Here we’re going to create a Student class with a constructor and a few public fields. Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

// Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }   
}

interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Tim", "T", "lastName");

document.body.textContent = greeter3(user3);