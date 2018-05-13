const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // fs is node file systems that gives you access to your local files

const buildPath = path.resolve(__dirname, 'build'); // pointing to our build folder inside ethereum folder

fs.removeSync(buildPath); // remove the buildPath folder each time we recompile

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // ensureDirSyn checks to see if the directory exits, if it doesn;t, it creates it. 

// console.log(output);
for (let contract in output) { // for in loop iterates over keys of the contract
    fs.outputJsonSync( // writes a Json file inside the following directory
        path.resolve(buildPath, contract.replace(':', '') + '.json'), // we created Campaing.json and CompaignFactory.json 
        output[contract]
    );
}