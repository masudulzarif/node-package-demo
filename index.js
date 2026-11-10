// Import the required packages
const dayjs = require('dayjs');
const chalk = require('chalk');

// Format the current date and time
const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

// Print colorful output using chalk
console.log(chalk.green('Success! The package is working properly.'));
console.log(chalk.blue('Current Date & Time:'), chalk.yellow(currentDateTime));