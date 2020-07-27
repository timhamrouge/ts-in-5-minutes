// tsc interface.ts => to run
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Tim", lastName: "lastName" };
document.body.textContent = greeter2(user2);
