const chalk = require('chalk');
const notes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

//create add commande
yargs.command({
  command:'add',
  describe: 'Add a new value',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// create remove commande
yargs.command({
  command:'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// create a read command
yargs.command({
  command:'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// create list commande
yargs.command({
  command:'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes()
  }
})


// //add, remove, read, list
// console.log(process.argv);
// yargs.parse()

console.log(yargs.argv)
