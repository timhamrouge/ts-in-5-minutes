// tsc app.ts => to run
// OR
// npm start will compile this file


class StudentProd {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
  
  interface PersonProd {
    firstName: string;
    lastName: string;
  }
  
  function greeterProd(person: PersonProd) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
  
  let userProd = new StudentProd("Tim", "M.", "lastName");
  
  document.body.textContent = greeterProd(userProd);