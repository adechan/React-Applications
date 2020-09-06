import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from './images/messenger.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

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
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ( { id: doc.id, message: doc.data() }) ))
    });

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

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp:  firebase.firestore.FieldValue.serverTimestamp()   // server timezone
    });

    // keep all the old messages and append "input" to the end of array
    // setMessages([...messages, { username: username, message: input }]); 

    setInput('');  // set input blank after you sent a message
  }

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <p className="app__title">Messenger App</p>
      <p className="app__welcome">Welcome {username}</p>
      
      {/* 
      wrap it inside a form 
      and add 'type=submit' so we can use Enter button 
      */}
      <form className="app__form"> 
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Type a message and press Enter..." value={input} onChange={event => setInput(event.target.value)}/>

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      <FlipMove className="app__flipmove">
        {
          // loop through the array messages and display each of them
          messages.map(({id, message}) => ( 
            // add the "key" so it only re-renders the top one, and it pushes the list down
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>


    </div>
  );
}

export default App;
