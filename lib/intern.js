// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class intern {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Intern";
    }
  
    getName() {
      return this.name;
    }
    getId() {
      
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return this.role;
    }
  }
  
  module.exports = intern;