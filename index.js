const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

var teamMembers = [];

function createManager() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this manager's unique ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is this manager's office number?"
            },
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: 'Would you like to add any more team members?',
                default: false
            }
        ])
        .then(( answers ) => {
            this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(this.manager);
            console.log(teamMembers);

            if (answers.confirmTeam) {
                createTeam();
            }
            else {
                console.log("Your team profile has been created!");
                // Create file here later
            }
        })
};

function createTeam() {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'Is your team member an engineer or an intern?',
            choices: ['Engineer', 'Intern']
        })
        .then(({ role }) => {
            if (role === 'Intern') {
                createIntern();
            }
            else {
                createEngineer();
            }
        })
};

function createIntern() {
    inquirer    
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this intern's unique ID Number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does this intern attend school?'
            },
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: 'Do you want to add another team member?'
            }
        ])
        .then(( answers ) => {
            this.intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(this.intern);
            console.log(teamMembers);

            if (answers.confirmTeam) {
                createTeam();
            }
            else {
                console.log("Your team profile has been created!");
                // Create file here later
            }
        })
};

function createEngineer() {
    inquirer    
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this engineer's unique ID Number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this engineer's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is this engineer's GitHub username?"
            },
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: 'Do you want to add another team member?',
                default: false
            }
        ])
        .then(( answers ) => {
            this.engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(this.engineer);
            console.log(teamMembers);

            if (answers.confirmTeam) {
                createTeam();
            }
            else {
                console.log("Your team profile has been created!");
                // Create file here later
            }
        })
};

createManager();

// create a empty array
//function createManager()
// last question would be would you like to add team members
// .then()
// new Manager(name, phone, email.....)
// push the manager to the empty array


//function createTeam()
// prompt would ask what team member would 
// if (intern)
// call a function known as create intern

//function create intern()
//propmt would ask relevant questions
// last question would be would you like to add team members
// new Intern(name, phone, email.....)
// push the intern to the empty array
// if (would you like to add team members === true)
// call a function known as create team
// else create HTML