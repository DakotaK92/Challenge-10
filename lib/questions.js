// require colorKeywords array to check if input matches one of the acceptance colors
const colorKeywords = require('./colorKeywords.js')

const questions = [
    //***SHAPES***
    {
        message: 'What is the of your logo?',
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // ***SHAPE COLOR***
    //user choose color keyword or hexadecimal for shapeColor
    {
        message: 'What is the color of the shape? Choose a color format: ',
        type:'list',
        name:'shapeColorChoice',
        chocies: ['color keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        message: "Enter the shape color keyword",
        type: "input",
        name: "shapeColor",
        when: (answers) => {
            if(answers.shapeColorChoices === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        message: "Enter the shape hexadecimal number (#CCCCCCC)",
        type:"input",
        name:"shapeColor",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    // ***TEXT***
    // validate user can only submit 3 characters
    {
        message: 'What is the text? (three characters maximum)',
        type: 'input',
        name: 'text',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again!");
            }
            return true;
        }
    },

    // ***TEXT COLOR ***
    // user choose color keyword or hexadecimal for textColor
    {
        message: 'What is the color of the text? Choose a color format:',
        type: 'list',
        name: 'textColorChoice',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyboard (validate with colorKeywords array)
    {
        message: "Enter the text color keyword",
        type: "input",
        name: "textColor",
        when: (answers) => {
            if(answers.textColorChoices === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
        // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        message: "Enter the text hexadecimal number (#CCCCCCC)",
        type: "textColor",
        name: "input",
        when: (answers) => {
            if(answers.textColorChoices === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;