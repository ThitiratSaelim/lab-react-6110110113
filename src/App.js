import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  var word = "";
  var rand = Math.floor(Math.random()*6)+1;
  if(rand == 1) {
    word = "Hello";
  }
  else if(rand == 2){
    word = "Computer";   
  }
  else if(rand == 3){
    word = "Engineer";
  }
  else if(rand == 4){
    word = "Faculty";
  }
  else if(rand == 5){
    word = "Logic";
  }
  else if(rand == 6){
    word = "Depart";
  }

  return (
    <body>
      <center><br></br><h1>Welcome to Game!</h1><br></br></center>
      <h2>Click the random button to change question!</h2>
      <button className="button button1"><a href="http://localhost:3000/" >Random</a></button>
      <button className="button button2" onClick={() => answer(word)}>Answer</button>
      <h2>Rearrange characters for correctly order</h2>
      <div>
        <WordCard value={word}/>
      </div> 
      
    </body>
  );
}
export default App;

function answer(word){
  alert("The answer is "+word)
}