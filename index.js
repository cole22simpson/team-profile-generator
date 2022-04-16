const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const promptUser = employeeData => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter a unique ID number for this employee.'
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this employee's email?"
            },
            {
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(({ role }) => {
            if (role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is this manager's office number?"
                    })
                    .then(({ officeNumber }) => {
                        const manager = new Manager(officeNumber);
                        console.log(manager);
                    });
            }
            else if (role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'github',
                        message: "What is this engineer's GitHub username?"
                    })
                    .then(({ github }) => {
                        const engineer = new Engineer(github);
                        console.log(engineer);
                    })
            }
            else {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'school',
                        message: "What school does this intern attend?"
                    })
                    .then(({ school }) => {
                        const intern = new Intern(school);
                        console.log(intern);
                    })
            }
        });
};

promptUser();