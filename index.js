const inquirer = require('inquirer'); // use inquirer
const fs = require('fs'); // "file system"
const questions = require('./lib/questions.js'); // find questions
const fileName = "./examples/logo.svg"; // find logo.svg
const setShape = require('./lib/setShape.js') // find setShape.js

// function to create new svg file using inquirer response and file system
function createLogo(response) { // create a new logo
    const svg = setShape(response); // with the new shape
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg')); // with the responses create a logo and log Generated logo
}

// initialize, ask questions then createLogo using responses, catch any errors
function init() { // initialize
    inquirer // with inquirer
    .prompt(questions) // ask questions
    .then((response) => { // with the responses
        createLogo(response); // create logo
        })
    .catch(err => { //when you hit an error
            console.log(err) // log error
        });
}

init(); 