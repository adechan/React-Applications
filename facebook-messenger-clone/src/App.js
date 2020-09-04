import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(""); // example of react hook
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  // its gonna be fired from the button (so we expect it to have an event)
  // ES6
  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here

    // keep all the old messages and append "input" to the end of array
    setMessages([...messages, input]); 
    setInput('');  // set input blank after you sent a message
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      
      {/* 
      wrap it inside a form 
      and add 'type=submit' so we can use Enter button 
      */}
      <form> 
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessage}>Send Message</button>
      </form>

      {
        // loop through the array messages and display each of them
        messages.map(message => ( 
          <p>{message}</p> // returns HTML elements
        ))
      }
    </div>
  );
}

export default App;
