#!/usr/bin/env node
const branch = require('git-branch');
const fs = require('fs');
const uid = require('uuid');

const buildNumber = `${branch.sync()}${uid()}`;
fs.writeFileSync('./.githooks/pre-commit/build-number', buildNumber);
