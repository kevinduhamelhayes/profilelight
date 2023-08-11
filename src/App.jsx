//import useCount from "./hooks/useCount"
import './App.css'
import { useEffect, useState } from 'react';
import {note} from './Notes'
import axios from 'axios'

  //const { count, increment, decrement, reset } = useCount()
  //return (
    //<>
      //<h2>Contador: {count}</h2>
      //<button onClick={increment}>Incrementar</button>
      //<button onClick={decrement}>Decrementar</button>
     // <button onClick={reset}>Resetear</button>
    //</>
export default function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const[loading, setLoading] = useState(false);
  
useEffect(() => {
  setLoading(true);
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    const {data} = response;
    setNotes(data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  })
}, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Se ha enviado el formulario');
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    };
    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote('');
  }
return (
  <div className="App">
    <h1>Notes</h1>
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </ol>