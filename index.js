require('dotenv').config()
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('request-content', function (request, response) {
    return JSON.stringify(request.body)
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request-content'))

// let persons = [
//     {
//         "name": "Arto Hellas",
//         "number": "040-123456",
//         "id": 1
//     },
//     {
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523",
//         "id": 2
//     },
//     {
//         "name": "Dan Abramov",
//         "number": "12-43-234345",
//         "id": 3
//     },
//     {
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122",
//         "id": 4
//     },
// ]

app.get('/api/persons', (request, response, next) => {
    Person.find({})
        .then(result => {
            response.json(result)
        })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) response.json(person)
            response.status(404).end()
        })
        .catch(error => next(error))
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has ${persons.length} people </p>` + new Date().toString())
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body) return response.status(400).json({ error: 'missing content' })
    if (!(body.name && body.number)) return response.status(400).json({ error: 'missing information' })

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save()
        .then(savedPerson => {
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const id = Number(request.params.id)
    const body = request.body

    if (!body) return response.status(204).json({ error: 'missing content' })
    if (!(body.name && body.number)) return response.status(204).json({ error: 'missing information' })

    const person = {
        name: body.name,
        number: body.number,
        id: id
    }

    persons = persons.map(p => p.id !== id ? p : person)
    response.json(person)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})