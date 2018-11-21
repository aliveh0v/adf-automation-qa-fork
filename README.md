## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- install chrome browser(conf.js is set to chrome), or change browser



## Description
- open terminal navigate to directory with conf.js; spec.js and run the following command
- run tests: `protractor conf.js`


## Choices
- break down the scenario into 4 test cases
- 1) Change the provider
- 2) Login test
- 3) Go TO files and create folder twice
- 4) Delete folder
- Delete folder is incomplete. I wasn't able to figure out the sysntax of going 2 levels deep to select the appropriate folder name. Created an array of all folders, but kept getting error parsing through it.
