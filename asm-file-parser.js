#!/usr/bin/env node
/* Copyright (c) Joshua Nelson
 * Licensed under BSD 2-Clause
 * See https://opensource.org/licenses/BSD-2-Clause
 */
'use strict';

const getStdin = require('get-stdin');
const parser = new (require('./asm-parser'))();
const filters = require('./config');

getStdin(str => {
    for (let line of parser.processAsm(str, filters)) {
        // eslint-disable-next-line no-console
        console.log(line.text);
    }
}, {});
