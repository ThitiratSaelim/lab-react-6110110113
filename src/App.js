import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <body>
      <center><br></br><h1>Welcome to Game!</h1><br></br></center>
      <div>
        <WordCard value={word}/>
      </div>
      
    </body>
  );
}

export default App;
