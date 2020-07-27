// tsc app.ts => to run
// OR
// npm start will compile this file
var StudentProd = /** @class */ (function () {
    function StudentProd(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return StudentProd;
}());
function greeterProd(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userProd = new StudentProd("Jane", "M.", "User");
document.body.textContent = greeterProd(userProd);
