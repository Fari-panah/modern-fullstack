const PersonForm = ({name, number, handleNewNumber, handleNewName, handlePersons}) => {
    return(
         <form  onSubmit={handlePersons}>
        <div>
          name: <input value={name} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={number} onChange={handleNewNumber}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


    )
   
}

export default PersonForm