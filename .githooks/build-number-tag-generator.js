const branch = require('git-branch');
const fs = require('fs');

const dt = new Date().toGMTString();
const buildNumber = `build number: ${branch.sync()}-branch, ${dt}`;

fs.writeFileSync('../build-number-tag/build-number', buildNumber);
