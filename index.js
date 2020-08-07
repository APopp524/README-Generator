const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');






// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Project Title?",
        name: "projectTittle"
    },
    {
        type: "input",
        message: "Enter a detailed project description. ",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Enter step by step instructions on how to run the applicaiton. ",
        name: "installationProcess"
    },
    {
        type: "input",
        message: "Provide instructions for the applicaiton.",
        name: "instruction"
    },
    {
        type: "input",
        message: "Provide instructions examples for the application. ",
        name: "instructionExample"
    },
    {
        type: "input",
        message: "Enter the license name.  ",
        name: "licenseName"
    },
    {
        type: "input",
        message: "Enter the license URL. ",
        name: "licenseUrl"
    },
    {
        type: "input",
        message: "If there were other Github contributor(s) enter them here.",
        name: "contributorsGitHub"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
