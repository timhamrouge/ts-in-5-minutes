// tsc greeter.ts => to run

function  greeter(person: string) {
    return "Hello, " + person;
}

// this will work
let user = "Timothy";

//this will throw an error
// let user = [0,1,2,3];

document.body.textContent = greeter(user);