import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';

function App() {
  const [input, setInput] = useState(""); // example of react hook
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState: variable in REACT
  // useEffect: run code on a condition in REACT

  useEffect(() => {
    // runs once when the app component loads 
    // "onSnapshot": every time the db changes, this code will run
    // snapshot stores all the documents from collection
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })

  }, [input])

  useEffect(() => {
    // run code here...
    setUsername(prompt('Please enter your name'));
    // if its blank [], this code runs ONCE when the app component loads
    // [input], this code runs every time input changes
  }, [])   // condition

  // its gonna be fired from the button (so we expect it to have an event)
  // ES6
  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here

    // keep all the old messages and append "input" to the end of array
    setMessages([...messages, { username: username, text: input }]); 
    setInput('');  // set input blank after you sent a message
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>
      
      {/* 
      wrap it inside a form 
      and add 'type=submit' so we can use Enter button 
      */}
      <form> 
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        // loop through the array messages and display each of them
        messages.map(message => ( 
          <Message username={username} message={message} />
        
        ))
      }
    </div>
  );
}

export default App;
