const inquirer = require('inquirer'); // Looks for the inquirer library
const fs = require('fs'); // 'File Structure'
const questions = require('./lib/questions.js'); // Find the questions
const fileName = "./examples/logo.svg";// Find the logo.svg file
const setShape = require('./lib/setShapes.js'); // Find the setShapes file

// function to create a new svg file using inquirer and file system
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console/log('Generated logo.svg'));
}

// initialize, ask the questions then create a logo using responses, catch and errors.
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();
