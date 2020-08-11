
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');

// Function to start questions //
async function run(){
    console.log(`starting`);
    const userResponse = await inquirer
    
    // Prompt questions //
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Provide detail description of your Project.",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Explain the process to install the application.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instrucitons on how to run the application.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Enter the License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "Enter the License URL. ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "List any other GitHub contributor(s)",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ]);

        // constants for prompted questions //
        console.log(`starting`);
        console.log(userResponse);
        const gitUsername = userResponse.username;
        const projectTitle = userResponse.projectTitle;
        const projectDescription = userResponse.projectDescription;
        const installationProcess = userResponse.installationProcess;
        const instruction = userResponse.instruction;
        const licenseName = userResponse.licenseName;
        const licenseUrl = userResponse.licenseUrl;
        const contributorUserNames = userResponse.contributorsGitUserName;
        const tests = userResponse.tests;
        const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
        const gitData = gitResponse.data;
        const gitName = gitData.login;
        const gitEmail = gitData.email;
        const gitlocation = gitData.location;
        const gitUrl = gitData.html_url;
        const gitProfileImage = gitData.avatar_url;
        const contributorUserNamesArray = contributorUserNames.split(",");
        console.log(contributorUserNamesArray);
        
        // Github contributors for Project //
        var resultContributor;
        for (i=0; i<contributorUserNamesArray.length; i++){
            var contributorsGitUserName = contributorUserNamesArray[i]
            const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
            var gitContribuProfileImage = gitResponse2.data.avatar_url;
            var gitContribuUrl = gitResponse2.data.html_url;
            var resultContributor = resultContributor + (`
            \n <img src="${gitContribuProfileImage}" alt="profile" width="100" display="inline"/> ${contributorsGitUserName}  GitHubLink: ${gitContribuUrl}`);
        }
        var result = (`
# ${projectTitle} 
${projectDescription}
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Author](#Author)
\n* [Tests](#Tests)
## Installation
${installationProcess}
## Instructions
${instruction}
\`\`\`
## License 
This project is licensed under the ${licenseName} - see the ${licenseUrl} file for details
## Contributors
${resultContributor}
## Tests
${tests}
## Author 
\n![ProfileImage](${gitProfileImage})
\n**${gitName}**
\nEmail: ${gitEmail}
\nLocation:${gitlocation}
\nGitHub: ${gitUrl}
`)
var writeResult = fs.writeFileSync(path.join(__dirname, '../README-Generator', 'READMe.md'), result )
console.log("README.md has been created...")
    }
run();
