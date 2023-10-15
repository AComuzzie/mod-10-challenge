const fs = require('fs');
const questions = require('./lib/questions');
const setShape = require('./lib/setShape');
const fileName = require('./examples/logo.svg')
const inquirer = require('inquirer');


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('SVG Logo Generated'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    });
}

init();