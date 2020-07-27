// tsc interface.ts => to run

// Here we use an interface that describes objects that have a firstName and lastName field. In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Tim", lastName: "lastName" };

document.body.textContent = greeter2(user2);