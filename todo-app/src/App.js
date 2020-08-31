import React, { useState } from 'react';
import './App.css';

function App() {
  // Start with an empty array which is a short term memory for the app
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'qazi wants to live stream today']);
  const [input, setInput] = useState(''); 
  console.log(input);

  return (
    <div className="App">
     <h1>Hello World!</h1>
     <input value={input} onChange={event => setInput(event.target.value)}/>
     <button>Add Todo</button>

     <ul> 
       {todos.map(todo => (
         <li>{todo}</li>
        ))}
     </ul>
    </div>
  );
}

export default App;
