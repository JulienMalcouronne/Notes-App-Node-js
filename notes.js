const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
  return 'your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
      return note.title === title
    })

    if (duplicateNotes.length === 0) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log('Note added')
    } else {
        console.log('Note title taken!')
    }
}


const removeNote = function (title) {
  const notes = loadNotes()
  const noteToKeep = notes.filter(function (note) {
      return note.title !== title
    })
    if (notes.length > noteToKeep.length) {
      console.log(chalk.green.inverse('Note removed!'))
      saveNotes(noteToKeep)
    } else {
      console.log(chalk.red.inverse('No note found!'))
    }
}

const loadNotes = function () {
  try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
      return []
  }
}
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
