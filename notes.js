const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes...'
}

// add note and save it in notes.json
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// This function should remove a note that user will specify
const removeNote = (title) => {
  const notes = loadNotes()
  const noteToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > noteToKeep.length) {
      console.log(chalk.green.inverse('Note removed!'))
      saveNotes(noteToKeep)
    } else {
      console.log(chalk.red.inverse('No note found!'))
    }
}

// This function should list all notes
const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse('Your notes'))
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not Found!'))
  }
}

const loadNotes = () => {
  try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
      return []
  }
}

// save data in notes.json as json
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}
// exports all the function to be able to use it in app.js
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
