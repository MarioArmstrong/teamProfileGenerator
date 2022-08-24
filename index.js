const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let storedMembers = [];//empty array for Employee classes created by user

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "what is your manager's id number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "what is your manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "what is your manager's office number?",
            name: 'number',
        },
    
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.number);
        storedMembers.push(manager);
        addAnother();
    });
}//END addManager()

function addAnother() {
    inquirer.prompt([
        {
            type: 'selectLine',
            message: 'which would you like to add?',
            name: 'add',
            choices: ['engineer','intern','I don\'t want to add anymore!']
        },
    ])
    .then((response) => {
        if(response==='engineer') {
            addEngineer();
        } else if(response==='intern') {
            addIntern();
        } else{
            return generateHTML(answers);
        }
    });
}// END addAnother()

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "what is the engineer's id number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "what is the engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "what is the engineer's github username?",
            name: 'github',
        },
    ])
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        storedMembers.push(engineer);
        addAnother();
    });
}//END addEngineer()

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "what is the intern's id number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "what is the intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "what is the intern's school name?",
            name: 'school',
        },
    ])
    .then((response) => {
        const intern = new Intern(respsonse.name, response.number, response.email, response.school);
        storedMembers.push(intern);
        addAnother();
    });
}//END addIntern()

addManager();



