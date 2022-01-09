const fs = require('fs')

// const book = {
//   title: 'Ego is the Ennemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const datajson = fs.readFileSync('1-json.json')
const dataJSON = datajson.toString()
const data = JSON.parse(dataJSON)
data.name = 'Julien'
data.age = 28
const datastring = JSON.stringify(data)
fs.writeFileSync('1-json.json', datastring)
