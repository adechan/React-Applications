import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  // Start with an empty array which is a short term memory for the app
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(''); 

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // we call it and it runs once the app loads (its a hook)
  useEffect(() => {
    // this code fires when the app.js loads

    // fires a snapshot that updates the todos
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}) ))
    });

  }, []); // runs once the app loads 

  console.log(input);

  // ES6 syntax: new JS standard
  const addTodo = (event) => {
    // This will fire off when we click the button
    console.log('I am working!');

    // => So it doesn't refresh the page when you submit
    event.preventDefault();

    // add to the db => which then fires a snapshot
    // => which then updates the todos
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // ...todos: (Spread) push it to the end of current state
    // using it so it doesn't delete the old states
    // setTodos([...todos, input])

    // To clean the input after submiting
    setInput('');
  }

  return (
    <div className="App">
     <h1>Todo list</h1>

      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        {/* disabled={!input} disable the button if the input is blank */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
     </form>

     <div className="todos__list"> 
       {todos.map(todo => (
         <Todo todo={todo}/>
        ))}
     </div>
    </div>
  );
}

export default App;
