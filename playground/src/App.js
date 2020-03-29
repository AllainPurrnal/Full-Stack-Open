import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 },
    { name: 'Allain Bernal', id: 2 },
    { name: 'Elon Tusk', id: 3 }
  ])

  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
      return;
    }

    setPersons([
      ...persons, {
        name: newName,
        id: persons.length + 1
      } 
    ])
    setNewName('')
  }

  
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person, id) =>
        <p key={person.id}>{person.name}</p>
      )}

    </div>
  )
}

export default App;