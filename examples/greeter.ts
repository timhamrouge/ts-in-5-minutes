// tsc greeter.ts => to run

// We can take advantage of some of the new tools TypeScript offers. Add a : string type annotation to the ‘person’ function argument as shown here:

function  greeter(person: string) {
    return "Hello, " + person;
}

// this will work
let user = "Timothy";

//this will throw an error
// let user = [0,1,2,3];

// >>> Argument of type 'number[]' is not assignable to parameter of type 'string'. 


document.body.textContent = greeter(user);