import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
 
  return (
    <body>
      
      <center><br></br><h1>Welcome to Game!</h1><br></br></center>
      <h2>Click the random button to change question!</h2>
      <button onclick="myFunction()" className="button button1"><a href="http://localhost:3000/">Random</a></button>
      <p id="demo"></p>
      <div>
        <WordCard value={word}/>
       
      </div> 
      
    </body>
  );
}

export default App;

