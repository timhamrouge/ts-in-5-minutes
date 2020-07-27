// TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
// Here we’re going to create a Student class with a constructor and a few public fields. Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.
// Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student("Tim", "T", "lastName");
document.body.textContent = greeter3(user3);
