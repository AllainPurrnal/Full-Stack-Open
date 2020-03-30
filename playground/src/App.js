import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '111-111-1111', id: 1 },
    { name: 'Zark Muckerberg', number: '222-222-2222', id: 2 },
    { name: 'Mon Elusk', number: '333-333-3333', id: 3 },
    { name: 'Jeve Stobs', number: '444-444-4444', id: 4}
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const addContact = (event) => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
      return;
    }
    if (persons.find(person => person.number === newNum)) {
      alert(`The number, ${newNum}, already exists in the phonebook`)
      return;
    }

    setPersons([
      ...persons, {
        name: newName,
        number: newNum,
        id: persons.length + 1
      } 
    ])
    setNewName('')
    setNewNum('')
  }

  const filterView = () => {
    if (newSearch === '') {
      return persons.map((person, id) => 
        <p key={person.id}>{person.name}: {person.number}</p>
      )
    }

    return console.log(
      [...persons].filter(
        person => person.name.toLowerCase().includes(newSearch.toLowerCase())
      )
    )
    

  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    // console.log(event.target.value)
    setNewNum(event.target.value)
  }
  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <h2>Look up</h2>
        <input value={newSearch} onChange={handleSearchChange}/>
      </div>

      <div>
        <h2>Add Contact</h2>
        <form onSubmit={addContact}>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>phone: <input value={newNum} onChange={handleNumChange} /></div>
          <div><button type="submit">add</button></div>
        </form>
      </div>

      <h2>Numbers</h2>
      {filterView()}

    </div>
  )
}

export default App;