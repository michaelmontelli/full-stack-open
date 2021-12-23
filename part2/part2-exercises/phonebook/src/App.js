import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PhonebookEntries from './components/PhonebookEntries'
import Notification from './components/Notification'
import noteService from './services/phonebook-entries'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        noteService
            .getAll()
            .then(initialData => {
                setPersons(initialData)
            })
    }, [])

  const deleteEntry = id => {
      const person = persons.find(p => p.id === id)
      const result = window.confirm(`Delete ${person.name}?`)

      if (result) {
          noteService
              .remove(id)
              .then(() => {
                  setPersons(persons.filter(p => p.id !== id))
                  setSuccessMessage(`Deleted ${person.name}`)
                  setTimeout(() => {
                      setSuccessMessage(null)
                  }, 5000)
              })
      }
  }

  const addPhonebookEntry = (event) => {
      event.preventDefault()

      if (persons.map(person => person.name).includes(newName)) {
          const result = window.confirm(`${newName} is already in the phonebook. Replace the old number with a new one?`)

          if (result) {
              const person = persons.find(p => p.name === newName)
              const id = person.id
              const newPerson = { ...person, number: newNumber}

              noteService
                  .update(id, newPerson)
                  .then(returnedPerson => {
                      setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
                      setNewName('')
                      setNewNumber('')
                      setSuccessMessage(`Updated ${returnedPerson.name}`)
                      setTimeout(() => {
                          setSuccessMessage(null)
                      }, 5000)
                  })
                  .catch(error => {
                      setNewName('')
                      setNewNumber('')
                      setErrorMessage(
                          `${person.name} was already removed from the server`
                      )
                      setTimeout(() => {
                          setErrorMessage(null)
                      }, 5000)
                      setPersons(persons.filter(p => p.id !== id))
                  })
          }
          return
      }

      const phonebookObject = {
          name: newName,
          number: newNumber
      }

      noteService
          .create(phonebookObject)
          .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
              setSuccessMessage(`Added ${returnedPerson.name}`)
              setTimeout(() => {
                  setSuccessMessage(null)
              }, 5000)
          })

  }

  const handleNameInput = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
      setNewNumber(event.target.value)
  }

  const filterEntries = (event) => {
      setFilter(event.target.value)
  }

  return (
      <div>
          <h1>Phonebook</h1>
          <Notification message={errorMessage} className='error'/>
          <Notification message={successMessage} className='success'/>
          <h2>Add a New Entry</h2>
          <PersonForm
              onSubmit={addPhonebookEntry}
              name={newName} onChange={handleNameInput}
              number={newNumber}
              onChange1={handleNumberInput}
          />

          <h2>Filter Entries</h2>
          <Filter value={filter} onChange={filterEntries}/>

          <h2>Phonebook Entries</h2>
          <PhonebookEntries
              persons={persons}
              filter={filter}
              deleteEntry={deleteEntry}
          />
      </div>
  )
}

export default App

