const chalk = require('chalk');
const getNotes = require('./notes.js')

const command = process.argv[2]
console.log(process.argv)

if (command === 'add') {
  console.log('Adding node')
} else if (command === 'remove') {
  console.log('Removing note!')
}
// const msg = getNotes()
// console.log(msg)

// console.log(chalk.red("error"))

// console.log(process.argv[2])

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)
