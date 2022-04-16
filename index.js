const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function createManager() {
    this.teamMembers = [];

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
            console.log(answers);
            this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(this.manager);
            this.teamMembers.push(this.manager[0]);
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