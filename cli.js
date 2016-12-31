#!/usr/bin/env node

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));

const path = require('upath');
const open = require('open');

const argv = require('yargs')
  .env('KULFON')
  .version()
  .usage('Usage: kulfon <command> [options]')
  .command(['init [dir]', 'initialize', 'i'], 'Initialize the directory', require('./lib/init'))
  .command(['server [dir]', 'serve', 's'], 'Serve the directory', require('./lib/server'))
  .example('kulfon server --port 4000', 'Serve the directory at the port 4000')
  .command(['compile', 'build', 'c', 'b'], 'Build source files to static assets', require('./lib/compiler'))
  .example('kulfon compile --environment production', 'Build source files for production (minified)')
  .command(['search [name]', 'find'], 'Find NPM package', require('./lib/search'))
  .command(['docs'], 'Go to the documentation at https://kulfon.net', {}, (_) => open('https://kulfon.net'))
  .demandCommand(1, 'You need at least one command before moving on')
  .help('h')
  .alias('h', 'help')
  .epilogue('for more information, find the documentation at https://kulfon.net')
  .argv;
