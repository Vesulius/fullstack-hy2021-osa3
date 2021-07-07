const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },   
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) response.json(person)
    response.status(404).end()
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has ${persons.length} people </p>` + new Date().toString())
})

app.post('/api/persons', (request, response) => {
    const id = Math.floor(Math.random() * 1000000)
    const body = request.body

    if (!body) return response.status(400).json({error: 'missing content'})

    const person = {
        name: body.name,
        number: body.number,
        id: id
    }

    persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(persons)
    persons = persons.filter(p => p.id !== id)
    console.log(persons)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})