// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Manager extends Manager{
    constructor(name, id, email, officenumber) {
        super(name, id, email)  // Super means we are calling the base class constructor. 
        this.officenumber = officenumber;
    }
    getOfficeNumber(){
        return this.officenumber;
    }
    getRole(){ 
        return "Manager"
    }
};

module.exports = Manager;
