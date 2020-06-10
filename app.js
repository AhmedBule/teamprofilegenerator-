const render = require('./lib/htmlrender');
const manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlrender");

let managerList = [];
let engineerList = [];
let internList = [];

function displayMenu(){
    inquirer.prompt([
        {
            type:"list", 
            name: "main-menu",
            choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Exit the Application"],
            message: "My Team"
        }
    ])
    .then(function(displayMenu){
      switch (displayMenu.main-menu) {
          case "Add a Manager":
              promptManager();
              break;
              case "Add an Engineer":
                promptEngineer();
                break;
                case "Add an Intern":
                    promptIntern();
                    break;
                    case "Exit the Application":
                        writefileApplication();
                        break;
      
          default:
              break;
      }
    })
}


// Write code to use inquirer to gather information about the development team members,

// and to create objects for each team member (using the correct classes as blueprints!)

// const writeFileAsync = util.promisify(fs.writeFile);

function promptManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your managers name?"
    },
    {
      type: "input",
      name: "ID",
      message: "What is your manager's ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?"
    },
    {
        type: "input",
        name: "info",
        message: "which type of team member would you like to add?"
    },
  ]).then(function(respmanager){
      const manager = new Manager(respmanager.name,respmanager.ID, respmanager.email, respmanager.officeNumber)
      managerList.push(manager)
      displayMenu();
  }
  )}


function promptEngineer() {
  inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
      },
      {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your engineer's GitHub Username"
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
      },
      {
          type: "input",
          name: "info",
          message: "which type of team members would you like to add?"
      },
    ]).then(function(respengineer){
      const engineer = new Engineer(respengineer.name,respengineer.ID, respengineer.email, respengineer.github)
      engineerList.push(engineer)
      displayMenu();
  }
  )}

  function promptIntern() {
    return inquirer.prompt([
      {
          type: "input",
          name: "name",
          message: "What is your intern's name?"
        },
        {
          type: "input",
          name: "ID",
          message: "What is your intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
          },
        {
          type: "input",
          name: "school",
          message: "What is your intern's school?"
        },
        {
            type: "input",
            name: "info",
            message: "which type of team members would you like to add?"
        },
      ]).then(function(respintern){
        const manager = new Intern(respintern.name,respintern.ID, respmanager.email, respintern.school)
        internList.push(intern)
        displayMenu();
    }
    )}
//         promptUser()
//   .then(function(answers) {
//     const employee = displayMenu(answers);

//     return writeFileAsync("main.html", employee);
//   })
//   .then(function() {
//     console.log("Successfully wrote to main.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

   function writefileApplication(){
       const header = `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>My Team</title>
       </head>
       <body>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-12 jumbotron mb-3 team-heading">
                       <h1 class="text-center">My Team</h1>
                       <div class="container p-3 my-3 bg-primary text-white"></div>
                   </div>
               </div>
           </div>`
           let htmlContent = header
           let managerText = ""
           for (let i = 0; i < managerList.length; i++)
           {
               managerText += `<div class="card" style="width: 18rem;">
               <div class="card-header">
                 Manager 
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">${managerList[i].name}</li>
                 <li class="list-group-item">${managerList[i].id}</</li>
                 <li class="list-group-item">${managerList[i].email}</</li>
                 <li class="list-group-item">${managerList[i].officeNumber}</</li>
               </ul>
             </div>`
           }

           htmlContent += engineerText
           let engineerText = " "
           for (let i = 0; i < engineerList.length; i++){
            engineerText +=`<div class="card" style="width: 18rem;">
            <div class="card-header">
              Engineer
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${engineerList[i].name}</li>
              <li class="list-group-item">${engineerList[i].id}</li>
              <li class="list-group-item">${engineerList[i].email}</li>
              <li class="list-group-item">${engineerList[i].github}</li>
            </ul>
          </div>`
           }

           htmlContent += internText
           let internText = " "
           for (let i = 0; i < internList.length; i++){
            internText +=`<div class="card" style="width: 18rem;">
            <div class="card-header">
              Intern
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${internList[i].name}</li>
              <li class="list-group-item">${internList[i].id}</li>
              <li class="list-group-item">${internList[i].email}</</li>
              <li class="list-group-item">${internList[i].school}</</li>
            </ul>
          </div>`
           }


           let footer = `</body>
           </html>`
           htmlContent += footer
           fs.writeFileSync("./main.html", htmlContent, function(){
            console.log("HTML file generated");
            process.exit(0)
           })
   }
  

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
