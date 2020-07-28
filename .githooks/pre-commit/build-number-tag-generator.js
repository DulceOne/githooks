#!/usr/bin/env node
const branch = require('git-branch');
const fs = require('fs');

const dt = new Date().toGMTString();
const buildNumber = `build number: ${branch.sync()}-branch, ${dt}`;
console.info("BUILD")
fs.writeFileSync('./build-number', buildNumber);
