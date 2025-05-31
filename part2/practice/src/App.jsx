import Note from "./component/Note"



const App = ({notes}) => {
  
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {notes.map(note => <Note  key={note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App