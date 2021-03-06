const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const newName = process.argv[3]
const newNumber = process.argv[4]


const url =
    `mongodb+srv://fullstack:${password}@cluster0.0evqp.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (!newName) {
  Person.find({}).then(result => {
    result.forEach(p => console.log(p))
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: newName,
    number: newNumber
  })

  person.save().then(() => {
    console.log(`added ${newName} number ${newNumber} to the phonebook`)
    mongoose.connection.close()
  })
}

