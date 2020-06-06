// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)  // Super means we are calling the base class constructor. 
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){ 
        return "Engineer"
    }
};

module.exports = Engineer;
